import React from 'react'
import './Course.css'

const Course = () => {
  return (
    <>
      
      <section className="courses">
            <h2>Our Popular Courses</h2>
            <div className="container course__container">
                <artical className="course">
                    <div className="course_image">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive course</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur eius totam quia reiciendis neque quisquam?</p>
                        <a href="course.html" className="btn btn-primary">Lern More</a>
                    </div>
                </artical>

                <artical className="course">
                    <div className="course_image">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive course</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur eius totam quia reiciendis neque quisquam?</p>
                        <a href="course.html" className="btn btn-primary">Lern More</a>
                    </div>
                </artical>

                <artical className="course">
                    <div className="course_image">
                        <img src="../../image/pic3.jpg" alt=""/>
                    </div>
                    <div className="course_info">
                        <h4>Responsive course</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis pariatur eius totam quia reiciendis neque quisquam?</p>
                        <a href="course.html" className="btn btn-primary">Lern More</a>
                    </div>
                </artical>
            </div>
        </section> 
    </>
  )
}

export default Course
