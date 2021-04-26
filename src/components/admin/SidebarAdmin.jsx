import React from "react";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div className="col-sm-3 col-md-2 sidebar">
      <ul className="nav nav-sidebar">
        <li >
          <Link to="/">خانه</Link>
        </li>
        <li >
          <Link to="/dashboard">داشبورد</Link>
        </li>
        <li>
          <Link to="/dashboard/courses">دوره ها</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
