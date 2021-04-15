import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = ()=> {
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
                        <button
                          className="btn btn-default btn-lg"
                          type="submit"
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="loginregButton pull-left">
                  <Link to="login" className="btn  btn-login ">
                    ورود
                  </Link>
                  <span className="circle-item">
                    <span className="border-item"> </span>
                  </span>
                  <a href="#" className="btn  btn-req">
                    ثبت نام
                  </a>
                  <span className="circle-item">
                    <span className="border-item"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default TopNav
