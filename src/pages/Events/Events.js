import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Events.css'
const Events = () => {
  return (
    <>
    <Navbar/>
    <div className='event-container' >
        <div className="event-wrapper">
            <div className="event-poster">
                <img src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=2000" alt="" />
            </div>
            <div className="event-details">
                <h1>Music Event</h1>
                <p className='desc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima in consequatur tempora, totam officia fugit quidem. Laborum ipsum numquam expedita in, ullam consequuntur et veniam commodi, deserunt laboriosam necessitatibus.</p>
                <p className='fee' >$20</p>
                <button>Pay</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Events