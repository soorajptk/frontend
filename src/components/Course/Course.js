
import React from 'react'
import './Course.css'
import userLogo from '../../images/logo/user.svg'
import commentLogo from '../../images/logo/comments.svg'

function Course() {
  return (
    <article className='courseSubContainer'> 
        <div className='courseInnerBody'>
            <img className='courseImg' src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="pic" />
        </div>
        <div className='courseBody'>
        <div className='courseTitle'>
        <h3 className='courseName'>Certified Specialist in Full Stack Development - MERN || NORKA</h3>
        </div>
        <div>
        <img className='Icon' src={userLogo} alt="user" /><span className='coursespan'>200</span>
        <img className='Icon' src={commentLogo} alt="comment" /><span className='coursespan'>50</span>
        </div>
        </div>
        <div className='previewCourse'>
            <button className='previewbtn'>preview course</button>
        </div>
    </article>
    )
}

export default Course