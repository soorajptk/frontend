
import React from 'react'
import './ViewCourse.css'
import Course from '../Course/Course'
function ViewCourse() {
  return (
    <section >
        <div className='courseContainer' >
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        <Course/>
        </div>
        
    </section>
    )
}

export default ViewCourse