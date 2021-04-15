import React from "react";

const Header = () => {
  return (
    <div>
      <div className="view-slide">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form action="" className="search-bg">
                <label className="search-bg__title">
                  آموزش مورد نظر خود را جستجو کنید
                </label>
                <input
                  type="text"
                  className="form-control input-lg search-bg__text"
                  name=""
                  placeholder="جستجو"
                />
                <button className="search-bg__btn" type="submit">
                  جستجو
                </button>
              </form>
              <div className="container" dir="ltr">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="owl-carousel owl-option-02">
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-01"></div>
                          <h3 className="owl-option-02__title">Economy</h3>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-02"></div>
                          <h3 className="owl-option-02__title">Languages</h3>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-03"></div>
                          <h3 className="owl-option-02__title">Design</h3>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-04"></div>
                          <h3 className="owl-option-02__title">Biology</h3>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-05"></div>
                          <h3 className="owl-option-02__title">History</h3>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-01"></div>
                          <h3 className="owl-option-02__title">Economy</h3>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-02"></div>
                          <h3 className="owl-option-02__title">Languages</h3>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-03"></div>
                          <h3 className="owl-option-02__title">Design</h3>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-04"></div>
                          <h3 className="owl-option-02__title">Biology</h3>
                        </a>
                      </div>
                      <div className="item">
                        <a href="#" className="owl-option-02__box-01">
                          <div className="owl-option-02__img-wrapp hov-img-05"></div>
                          <h3 className="owl-option-02__title">History</h3>
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

export default Header;
