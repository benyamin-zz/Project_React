import React, { useState } from "react";
import { useSelector } from "react-redux";
import { paginate } from "../../utils/paginate";
import Pagination from "../Common/Pagination";
import Course from "./Course";

const ArchiveCourse = () => {
  const courses = useSelector((state) => state.courses);
  const [currentPage, setCurrentPage] = useState();
  const [prePage] = useState(6);
  const indexCourses = paginate(courses, currentPage, prePage);
const onPageChange = (event)=>{
  setCurrentPage(event)
}
  return (
    <div>
      <Course courses={indexCourses} />
      <Pagination totalCourse={courses.length} currentPage={currentPage} prePage={prePage} onPageChange={onPageChange} />
    </div>
  );
};

export default ArchiveCourse;
