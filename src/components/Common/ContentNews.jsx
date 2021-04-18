import React from "react";

const ContentNews = () => {
  return (
    <div>
      <div className="content-news">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="header-content-news text-center">
                <h2>News & Events</h2>
                <small>
                  Suspendisse sodales arcu velit, non pretium massa accumsan
                  non. Proin accumsan placerat mauris sit amet condimentum.
                  Morbi luctus risus tincidunt urna hendrerit mollis.
                </small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-">
              <div className="news-info">
                <div className="news-info__post">
                  <div className="news-info__date-block">
                    <p>12</p>
                    <span>مهر</span>
                  </div>
                  <h4 className="news-info__title">
                    {" "}
                    <a href="#">فریم ورک برتر PHP برای توسعه دهندگان وب</a>
                  </h4>
                  <div className="news-info__text">
                    <p>
                      PHP یک زبان برنامه نویسی وب است کهدر سطح جهانی مورد قبول
                      واقع شده است و...
                    </p>
                  </div>
                  <a href="#" className="read-more">
                    ادامه مطلب <i className="fas fa-chevron-left"></i>
                  </a>
                </div>
              </div>
              <div className="news-info">
                <div className="news-info__post">
                  <div className="news-info__date-block">
                    <p>14</p>
                    <span>آذر</span>
                  </div>
                  <h4 className="news-info__title">
                    {" "}
                    <a href="#">فریم ورک برتر PHP برای توسعه دهندگان وب</a>
                  </h4>
                  <div className="news-info__text">
                    <p>
                      PHP یک زبان برنامه نویسی وب است کهدر سطح جهانی مورد قبول
                      واقع شده است و...
                    </p>
                  </div>
                  <a href="#" className="read-more">
                    ادامه مطلب <i className="fas fa-chevron-left"></i>
                  </a>
                </div>
              </div>
              <div className="news-info">
                <div className="news-info__post">
                  <div className="news-info__date-block">
                    <p>23</p>
                    <span>مهر</span>
                  </div>
                  <h4 className="news-info__title">
                    {" "}
                    <a href="#">فریم ورک برتر PHP برای توسعه دهندگان وب</a>
                  </h4>
                  <div className="news-info__text">
                    <p>
                      PHP یک زبان برنامه نویسی وب است کهدر سطح جهانی مورد قبول
                      واقع شده است و...
                    </p>
                  </div>
                  <a href="#" className="read-more">
                    ادامه مطلب <i className="fas fa-chevron-left"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="item-news">
                    <div className="item-news-img">
                      <div className="cover"></div>
                      <a href="#">
                        <img src="./assets/img/news_img_02.jpg" alt="" />
                      </a>
                    </div>
                    <div className="news-item__content">
                      <p className="news-item__Date">26 مهر 1397</p>
                      <div className="news-item__title">
                        <h3>زبان های برنامه نویسی وب</h3>
                        <a href="#">
                          ادامه مطلب <i className="fas fa-chevron-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="item-news">
                    <div className="item-news-img">
                      <div className="cover"></div>
                      <a href="#">
                        <img src="./assets/img/news_img_01.jpg" alt="" />
                      </a>
                    </div>
                    <div className="news-item__content">
                      <p className="news-item__Date">26 مهر 1397</p>
                      <div className="news-item__title">
                        <h3>زبان های برنامه نویسی وب</h3>
                        <a href="#">
                          ادامه مطلب <i className="fas fa-chevron-left"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNews;
