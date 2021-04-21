import React from "react";
import { Link } from "react-router-dom";

const Course = ({courses} ) => {
  return (
    <div>
      <div className="Popular-courses">
        <div className="container">
          <div className="heading-inner text-center">
            <h2>Popular Courses</h2>
            <small> we are profesional</small>
          </div>
          <div className="widget-content">
            <div className="row">
              {courses.map((course) => (
                <div className="col-md-4" key={course._id}>
                  <div className="item-course">
                    <div className="course-img">
                      <Link to={`/course/${course._id}`}>
                        <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} alt="" />
                      </Link>
                      <div className="course-price">
                        <span>{course.price === 0 ? "رایگان" : `${course.price} تومان` }</span>
                      </div>
                    </div>
                    <div className="course-inner ">
                      <div className="course-header text-center">
                        <h4>
                          <Link to={`/course/${course._id}`}>{course.title}</Link>
                        </h4>
                        <div className="author">
                          <span>
                            Teacher
                            <a href="#">Benyamin</a>
                          </span>
                        </div>
                      </div>
                      <div className="course-meta">
                        <div className="right-meta">
                          <div className="duration">
                            <i className="fas fa-stopwatch"></i>
                            <span>2 هفته</span>
                          </div>
                          <div className="lesson">
                            <i className="fa fa-chalkboard-teacher"></i>
                            <span>51</span>
                          </div>
                        </div>
                        <div className="left-meta">
                          <div className="course-rating" dir="ltr">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
