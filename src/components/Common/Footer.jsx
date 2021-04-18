import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="row">
          <div className="col-md-6 col-sm-6 right-back">
            <div className="text-footer">
              <h3>MoonCode.ir</h3>
              <ul className="list-unstyled three-columans">
                <li>خانه</li>
                <li>زبان برنامه نویسی</li>
                <li>درباره ما</li>
                <li>رویدادهای جالب</li>
                <li>برنامه نویسی وب</li>
                <li>زبان PHP</li>
              </ul>
              <div className="separator100 bg333 mtb30"></div>
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <img
                    className="img-responsive img-thumbnail "
                    src="./assets/img/19-128.png"
                    alt="work1"
                  />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <img
                    className="img-responsive img-thumbnail "
                    src="./assets/img/19-128.png"
                    alt="work1"
                  />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <img
                    className="img-responsive img-thumbnail"
                    src="./assets/img/19-128.png"
                    alt="work1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 left-back">
            <div className="phone " dir="ltr">
              <a href="mailto:you@domain.com" className="text-decoration-none">
                <span className="feature-box custom-feature-box mb-xlg">
                  <span className="custom-feature-box-icon">
                    <i className="fa fa-envelope icons text-color-light"></i>
                  </span>
                  <span className="feature-box-info">
                    <label className="font-weight-semibold text-uppercase custom-text-color-1">
                      Email
                    </label>
                    <strong className="font-weight-light text-color-light custom-opacity-effect-1">
                      you@domain.com
                    </strong>
                  </span>
                </span>
              </a>
              <a href="mailto:you@domain.com" className="text-decoration-none">
                <span className="feature-box custom-feature-box mb-xlg">
                  <span className="custom-feature-box-icon">
                    <i className="fa fa-phone icons text-color-light"></i>
                  </span>
                  <span className="feature-box-info">
                    <label className="font-weight-semibold text-uppercase custom-text-color-1">
                      Phone
                    </label>
                    <strong className="font-weight-light text-color-light custom-opacity-effect-1">
                      09216119380
                    </strong>
                  </span>
                </span>
              </a>
              <a href="mailto:you@domain.com" className="text-decoration-none">
                <span className="feature-box custom-feature-box mb-xlg">
                  <span className="custom-feature-box-icon">
                    <i className="fab fa-telegram-plane icons text-color-light"></i>
                  </span>
                  <span className="feature-box-info">
                    <label className="font-weight-semibold text-uppercase custom-text-color-1">
                      Telegran
                    </label>
                    <strong className="font-weight-light text-color-light custom-opacity-effect-1">
                      @MoonCode
                    </strong>
                  </span>
                </span>
              </a>
              <span className="feature-box custom-feature-box mb-xlg">
                <span className="custom-feature-box-icon">
                  <i className="fa fa-share-alt icons text-color-light"></i>
                </span>
                <a
                  href="http://www.facebook.com"
                  className="text-decoration-none"
                >
                  <span className="feature-box-info">
                    <label className="font-weight-semibold text-uppercase custom-text-color-1">
                      Follow me
                    </label>
                    <strong className="font-weight-light text-color-light custom-opacity-effect-1">
                      Facebook
                    </strong>
                  </span>
                </a>
                <a
                  href="http://www.twitter.com"
                  className="text-decoration-none"
                >
                  <span className="feature-box-info custom-both-side-border">
                    <strong className="font-weight-light text-color-light custom-opacity-effect-1">
                      Twitter
                    </strong>
                  </span>
                </a>
                <a
                  href="http://www.linkedin.com"
                  className="text-decoration-none"
                >
                  <span className="feature-box-info p-none">
                    <strong className="font-weight-light text-color-light custom-opacity-effect-1">
                      Linkedin
                    </strong>
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
