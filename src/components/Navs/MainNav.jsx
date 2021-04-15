import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <div>
                        <nav className="menuWrapper navbar navbar-default">
            <div className="container coustom-container">
                <div className="navbar-header">
                <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <img
                    src="./assets/img/moon.png"
                    className="img-responsive"
                    alt="Logo Image"
                    />
                </a>
                </div>
                <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
                >
                <ul className="nav navbar-nav">
                    <li className="active">
                    <Link to="/">
                        <i className="fa fa-home"></i> خانه{" "}
                        <span className="sr-only">(current)</span>
                    </Link>
                    </li>
                    <li className="dropdown">
                    <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fa fa-code"></i> زبان برنامه نویسی{" "}
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                        <a href="#">Html</a>
                        </li>
                        <li>
                        <a href="#">css</a>
                        </li>
                        <li>
                        <a href="course.html">Php</a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                        <a href="#">Separated link</a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                        <a href="#">One more separated link</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a href="categories.html">
                        <i className="fa fa-clipboard"></i>دوره ها
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <i className="fa fa-clipboard"></i> درباره ما
                    </a>
                    </li>
                    <li>
                    <a href="contact.html">
                        <i className="fa fa-phone-square"></i> تماس با ما
                    </a>
                    </li>
                </ul>
                <div className="loginregButton pull-left">
                    <a href="#" className="btn  btn-login ">
                    ورود
                    </a>
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
            </nav>
        </div>
    );
}

export default MainNav;
