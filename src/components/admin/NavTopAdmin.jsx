import React from "react";

const NavTopAdmin = () => {
  return (
    <div className="custom">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a
              className="navbar-brand"
              href="https://getbootstrap.com/docs/3.3/examples/dashboard/#"
            >
              Project name
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <a href="https://getbootstrap.com/docs/3.3/examples/dashboard/#">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="https://getbootstrap.com/docs/3.3/examples/dashboard/#">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavTopAdmin;
