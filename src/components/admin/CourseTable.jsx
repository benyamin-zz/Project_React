import React, { useState } from "react";
import { useSelector } from "react-redux";
import { paginate } from "../../utils/paginate";
import Pagination from "../Common/Pagination";
import NewCourse from "./Dialog/NewCourse";
import EditCourse from "./Dialog/EditCourse";
import Deletecourse from "./Dialog/Deletecourse";

const CourseTable = () => {
  const courses = useSelector((state) => state.courses);
  const [currentPage, setCurrentPage] = useState();
  const [currentCourse, setCurrentCourse] = useState({});
  const [prePage] = useState(20);
  const indexCourses = paginate(courses, currentPage, prePage);

  const [showDialogNewCourse, setShowDialogNewCourse] = useState(false);
  const openNewCourse = () => setShowDialogNewCourse(true);
  const closeNewCourse = () => setShowDialogNewCourse(false);

  const [showDialogEditCourse, setShowDialogEditCourse] = useState(false);
  const openEditCourse = (course) => {
    setShowDialogEditCourse(true);
    setCurrentCourse(course);
  };
  const closeEditCourse = () => setShowDialogEditCourse(false);

  const [showDialogDeleteCourse, setShowDialogDeleteCourse] = useState(false);
  const openDeleteCourse = (course) => {
    setShowDialogDeleteCourse(true);
    setCurrentCourse(course);
  };
  const closeDeleteCourse = () => setShowDialogDeleteCourse(false);


  const onPageChange = (event) => {
    setCurrentPage(event);
  };
  return (
    <div>
      <NewCourse
        openDialog={showDialogNewCourse}
        closeDialog={closeNewCourse}
      />
      <EditCourse
        openDialog={showDialogEditCourse}
        closeDialog={closeEditCourse}
        course={currentCourse}
      />
      <Deletecourse
        openDialog={showDialogDeleteCourse}
        closeDialog={closeDeleteCourse}
        course={currentCourse}
      />
      <h1 className="page-header">دوره ها</h1>
      <button className="btn btn-primary" onClick={openNewCourse}>
        + اضافه کردن دوره جدید
      </button>
      <form style={{ width: "50%", float: "left", marginLeft: "2em" }}>
        <input className="form-control" placeholder="جستجو" type="search" />
      </form>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">عنوان دوره</th>
              <th scope="col">تصویر دوره</th>
              <th scope="col">قیمت دوره (تومان)</th>
              <th scope="col">ویرایش</th>
              <th scope="col">حذف</th>
            </tr>
          </thead>
          <tbody>
            {indexCourses.map((course) => (
              <tr key={course._id}>
                <td>{course.title}</td>
                <td>
                  <a
                    href={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                    target="_blank"
                    className="btn btn-info btn-sm"
                  >
                    نمایش تصویر
                  </a>
                </td>
                <td>{course.price === 0 ? "رایگان" : course.price}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => openEditCourse(course)}
                  >
                    ویرایش
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={()=>openDeleteCourse(course)}>حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalCourse={courses.length}
        currentPage={currentPage}
        prePage={prePage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CourseTable;
