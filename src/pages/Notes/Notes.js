import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Notes.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const teacher = useSelector((state) => state.user.currentUser.teacher)
  useEffect(() => {
    const fetchNotes = async () => {
      try{
        const res = await axios.get('http://localhost:8800/api/notes')
        console.log(res.data)
        setNotes(res.data)
      }catch (err) {
        console.log(err)
      }
    }
    fetchNotes()
  }, [])
  return (
    <>
    <Navbar/>
    {teacher && <Link to='/add-note' className='add-button' >Add a Notes</Link>}
    <div className='notes-container' >
      {notes.map((note) => (

        <div className="cards" key={note._id} >
            <div className="img">
            </div>
            <div className="details">
                <p>{note.name}</p>
                <a className='add-notes' href={note.file} download>Click to download</a>
            </div>
        </div> 
          ))}
    </div>
    </>
  )
}

export default Notes