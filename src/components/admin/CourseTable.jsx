import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { paginate } from "../../utils/paginate";
import Pagination from "../Common/Pagination";
import NewCourse from "./Dialog/NewCourse";
import EditCourse from "./Dialog/EditCourse";
import Deletecourse from "./Dialog/Deletecourse";
import { divide } from "lodash";

const CourseTable = () => {
  const courses = useSelector((state) => state.courses);
  const [currentPage, setCurrentPage] = useState();
  const [currentCourse, setCurrentCourse] = useState({});
  const [search, setSearch] = useState("");
  const [courseList,setCourseList] = useState([]);
  const [prePage] = useState(20);
  useEffect(() => {
    setCourseList(courses)

  }, [])

  const filteredCourses = courseList.filter((course) =>
  course.title.includes(search)
);

  const indexCourses = paginate(filteredCourses, currentPage, prePage);

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
      <h1 className="page-header">???????? ????</h1>
      <button className="btn btn-primary" onClick={openNewCourse}>
        + ?????????? ???????? ???????? ????????
      </button>
      <divide style={{ width: "50%", float: "left", marginLeft: "2em" }}>
        <input className="form-control" placeholder="??????????" type="search" onChange={(e)=>setSearch(e.target.value)} />
      </divide>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">?????????? ????????</th>
              <th scope="col">?????????? ????????</th>
              <th scope="col">???????? ???????? (??????????)</th>
              <th scope="col">????????????</th>
              <th scope="col">??????</th>
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
                    ?????????? ??????????
                  </a>
                </td>
                <td>{course.price === 0 ? "????????????" : course.price}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => openEditCourse(course)}
                  >
                    ????????????
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={()=>openDeleteCourse(course)}>??????</button>
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
