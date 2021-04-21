import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCourse } from "../../actions/courses";
import develope from '../../assets/images/Developer.png'

const SingleCourse = ({match}) => {
    const course = useSelector(state => state.course);
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        dispatch(getSingleCourse(match.params.id))
    }, [])
  return (
    <div>
    <div className="site-content">
        <div className="container">
          <div className="entry-title">
            <h1>
              <i className="fa fa-graduation-cap"></i> {course.title}
            </h1>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <div className="single-course">
                <div className="course-thumbnail">
                  <img
                    src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                    className="img-responsive img-thumbnail"
                    alt="Image"
                  />
                </div>
                <div className="course-landing">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a data-toggle="tab" href="#home">
                        آموزش
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu1">
                        درس های مرتبط
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu2">
                        مدرس
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu3">
                        نظرات
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                      <h3> {course.title}</h3>
                      <p>
                       {course.info}
                      </p>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                      <div className="panel-group" role="tablist">
                        <div className="panel">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="collapseListGroupHeading1"
                          >
                            <h4 className="panel-title">
                              {" "}
                              <a
                                href="#collapseListGroup1"
                                className=""
                                role="button"
                                data-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="collapseListGroup1"
                              >
                                شروع یادگیری{" "}
                              </a>{" "}
                            </h4>
                          </div>
                          <div
                            className="panel-collapse collapse in"
                            role="tabpanel"
                            id="collapseListGroup1"
                            aria-labelledby="collapseListGroupHeading1"
                            aria-expanded="true"
                          >
                            <ul className="list-group">
                              <li className="list-group-item">
                                <a href="#">
                                  آموزش PHP - جلسه اول معرفی و ابزارهای مورد
                                  نیاز
                                </a>
                              </li>
                              <li className="list-group-item">
                                <a href="#">
                                  آموزش PHP - جلسه دوم، متغییرها و توضیحات در
                                  کدها
                                </a>
                              </li>
                              <li className="list-group-item">
                                <a href="#">آموزش PHP - جلسه سوم: عملگرها</a>
                              </li>
                              <li className="list-group-item">
                                <a href="#">آموزش PHP - جلسه چهارم: آرایه ها</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                      <div className="thim-about-author">
                        <div className="author-avatar">
                          <img  src={develope}   className="img-circle img-responsive"    alt=" " />
                        </div>
                        <div className="author-bio">
                          <div className="author-top">
                            <a className="name" href="#">
                              Benjamin
                            </a>
                            <p className="job">نویسنده</p>
                          </div>
                          <ul className="thim-author-social list-unstyled">
                            <li>
                              <a href="#" className="facebook">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="twitter">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="google-plus">
                                <i className="fab fa-google-plus-g"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="linkedin">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="youtube">
                                <i className="fab fa-youtube"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="author-description">
                          <p>
                            درباره من: لیسانس نرم افزار دارم. به زبان‌های
                            php,sql,html,css,java,android,c++, basic و...
                            برنامه‌نویسی می‌کنم. برای آزاد شدن ذهنم کتاب میخونم
                            و فیلم می‌بینم و گاهی با دوستان گردشگری می‌کنم.
                            تکنولوژی عشق منه و سعیم اینه در هر زمینه‌ای که بتونم
                            هر روز خودمو به‌روز نگه دارم.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div id="menu3" className="tab-pane fade">
                      <div className="course-comments">
                        <form action="#">
                          <h4>
                            <span
                              className="glyphicon  glyphicon-triangle-left"
                              aria-hidden="true"
                            ></span>
                            پرسش خود را مطرح نمایید
                          </h4>
                          <textarea
                            className="form-control"
                            rows="4"
                            placeholder="متن پرسش خود را اینجا بنویسید ..."
                          ></textarea>
                          <input
                            type="submit"
                            className="btn btn-primary"
                            name=""
                            value="ثبت پرسش"
                          />
                        </form>
                        <div className="divider"></div>
                        <div className="media">
                          <div className="media-left">
                            <a href="#">
                              <img
                                className="media-object"
                                src="./assets/img/developer2.jpg"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Ahmmad</h4>
                            <p>
                              سلام مجدد. من این اموزش و خریدم .تمام قسمتاش هست
                              الا قسمت هشتم اموزش.شما میتونین فقط قسمت هشتم برام
                              به ایمیلم بفرستین؟ تو کامنت گشتم دیدم بعضی دوستانم
                              این مشکل و داشتن.{" "}
                            </p>
                          </div>
                          <div className="divider"></div>
                        </div>
                        <div className="media">
                          <div className="media-left">
                            <a href="#">
                              <img
                                className="media-object"
                                src="./assets/img/developer2.jpg"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Ahmmad</h4>
                            <p>
                              سلام مجدد. من این اموزش و خریدم .تمام قسمتاش هست
                              الا قسمت هشتم اموزش.شما میتونین فقط قسمت هشتم برام
                              به ایمیلم بفرستین؟ تو کامنت گشتم دیدم بعضی دوستانم
                              این مشکل و داشتن.{" "}
                            </p>
                          </div>
                          <div className="divider"></div>
                        </div>
                        <div className="media">
                          <div className="media-left">
                            <a href="#">
                              <img
                                className="media-object"
                                src="./assets/img/developer2.jpg"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading">Ahmmad</h4>
                            <p>
                              سلام مجدد. من این اموزش و خریدم .تمام قسمتاش هست
                              الا قسمت هشتم اموزش.شما میتونین فقط قسمت هشتم برام
                              به ایمیلم بفرستین؟ تو کامنت گشتم دیدم بعضی دوستانم
                              این مشکل و داشتن.{" "}
                            </p>
                          </div>
                          <div className="divider"></div>
                        </div>
                        <nav className="text-center">
                          <ul className="pagination">
                            <li>
                              <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li>
                              <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="course-info">
                <ul className="list-unstyled">
                  <li className="title">
                    {" "}
                    <i className="fa fa-info-circle"></i> اطلاعات کلی
                  </li>
                  <li>
                    <i className="fa fa-book"></i> دوره :<span> {course.title}</span>
                  </li>
                  <li>
                    <i className="fa fa-user-circle"></i> مدرس :
                    <span> بنیامین</span>
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-language"></i> زبان :<span> فارسی</span>
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-language"></i> قیمت :<span> {course.price}</span>
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-clock"></i> تاریخ :
                    <span>۲۶ مرداد ۱۳۹۳ </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
