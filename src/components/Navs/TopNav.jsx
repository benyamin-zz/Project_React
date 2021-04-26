import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken"

const TopNav = () => {
  const user = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const decodeToken = jwt.decode(token)
  //   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//         const decodeToken = jwt.decode(token.decodeToken.user);
//     }
//     else{
//     }
// }, [])
  return (
    <div>
      <div className="headerWrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-2 pull-right ">
              <img
                src="./assets/img/moon.png"
                className="img-responsive"
                alt="Logo Image"
              />
            </div>
            <div className="col-md-7 col-sm-6  pad-seacrch ">
              <div className="searchTop">
                <form action="#">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control input-lg"
                      placeholder="آموزش مورد نظر را جستجو کنید..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default btn-lg" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-3 ">
              {!isEmpty(token) ? (
                <ul className="nav navbar-nav user-avatar ">
                
                  {decodeToken.user.isAdmin == true ? <li className="dropdown">  <Link to="/dashboard" >داشبورد</Link></li> : ""}
                  <li className="dropdown">
                    
                    <a
                     
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                     <i className="far fa-user-circle"></i> {decodeToken.user.fullname}<span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/profile">پروفایل</Link>
                      </li>

                      <li role="separator" className="divider"></li>
                      <li>
                        <Link to="/logOut">خروج</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              ) : (
                <div className="loginregButton pull-left">
                  <Link to="login" className="btn  btn-login ">
                    ورود
                  </Link>
                  <span className="circle-item">
                    <span className="border-item"> </span>
                  </span>
                  <Link to="/register" className="btn  btn-req">
                    ثبت نام
                  </Link>
                  <span className="circle-item">
                    <span className="border-item"></span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
