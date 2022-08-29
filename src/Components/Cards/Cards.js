import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
import { useSelector } from 'react-redux'

const Cards = () => {
  const teacher = useSelector((state) => state.user.currentUser.teacher)

  return (
    <div className='card-container' >
        <div className="cards">
            <div className="img">
                <img src="https://helen.edu.vn/wp-content/uploads/2021/09/smart-attendance-management-systemt-2-1024x576.jpeg" alt="" />
            </div>
            <div className="details">
                <p>Attendance</p>
                <Link to="/attendance" ><button>Enter</button></Link>
            </div>
        </div>

        <div className="cards">
            <div className="img">
                <img src="https://itechindia.co/wp-content/uploads/2019/11/Blog-Image-3.png" alt="" />
            </div>
            <div className="details">
                <p>Timetable</p>
                <Link to='/timetable' ><button>Enter</button></Link>
            </div>
        </div>

        <div className="cards">
            <div className="img">
                <img src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png" alt="" />
            </div>
            <div className="details">
                <p>Notes</p>
                <Link to='/notes' ><button>Enter</button></Link>
            </div>
        </div>

        <div className="cards">
            <div className="img">
                <img src="https://static-prod.adweek.com/wp-content/uploads/2018/06/Events.jpg" alt="" />
            </div>
            <div className="details">
                <p>Events</p>
                <Link to='/events' ><button>Enter</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Cards