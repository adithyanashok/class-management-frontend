import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Events.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51LUSnZA4Kwx24aJ8WNodncKZ177vuYvPP3dxjO3nrgtaUjZysZ1b39I9D665hrJZHZCCavO71QpT0tBw7cjeQohi00ojuX40Ne";
const Events = () => {
  const navigate = useNavigate();
  const event = useSelector((state) => state.event.currentEvent?.price);
  const teacher = useSelector((state) => state.user.currentUser.teacher);
  const [events, setEvents] = useState([]);
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/events/");
        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
  }, []);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8800/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: event * 100,
          }
        );
        navigate("/success", { state: { data: res.data } });
      } catch {}
    };
    makeRequest();
  }, [stripeToken, event, navigate]);

  return (
    <>
      <Navbar />
      {teacher && (
        <Link to="/add-event" className="add-button">
          Add a Event
        </Link>
      )}
      <div className="event-container">
        {events.map((event) => (
          <div key={event._id} className="event-wrapper">
            <div className="event-poster">
              <img src={event.img} alt="" />
            </div>
            <div className="event-details">
              <h1>{event.name}</h1>
              <p className="desc">{event.desc}</p>
              <p className="fee">${event.price}</p>
              <StripeCheckout
                name={event.name} // the pop-in header title
                description={`Pay $${event.price}`} // the pop-in header subtitle
                image={event.img} // the pop-in header image (default none)
                amount={event.price * 100}
                billingAddress
                shippingAddress
                currency="USD"
                stripeKey={KEY}
                token={onToken}
              >
                <button>Pay</button>
              </StripeCheckout>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;
