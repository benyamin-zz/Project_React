import React, { useRef, useState } from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { AddCourse } from "../../../actions/courses";

const NewCourse = ({ openDialog, closeDialog }) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [imageUrl, setimageUrl] = useState();
  const [info, setInfo] = useState();
  const [, forceUpdate] = useState("");
  const dispatch = useDispatch();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "این فیلد نباید خالی بماند",
        email: "فیلد ایمیل به درستی وارد نشده است",
        min: "این فیلد نباید کمتر از 5 کاراکتر باشد",
        integer: "قیمت باید عدد باشد",
      },
      element: (messages) => <div style={{ color: "red" }}>{messages}</div>,
    })
  );

  const handelSubmit = (event) => {
    event.preventDefault();
    try {
      if (validator.current.allValid()) {
        let data = new FormData();
        data.append("title", title);
        data.append("price", Number.parseInt(price));
        data.append("imageUrl", event.target.imageUrl.files[0]);
        data.append("info", info);

        //Dispatch
        dispatch(AddCourse(data));
        closeDialog();
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (error) {
        console.log("یک عدد اررو وجود دارد",error)
    }
  };

  return (
    <div>
      <DialogOverlay isOpen={openDialog} onDismiss={closeDialog}>
        <DialogContent
          aria-label="Announcement"
          style={{
            border: "solid 5px hsla(0, 0%, 0%, 0.5)",
            borderRadius: "10px",
          }}
        >
          <form className="form-horizontal" onSubmit={handelSubmit}>
            <div className="form-group">
              <label className="col-sm-3 control-label">عنوان دوره</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="عنوان دوره"
                  onChange={(e) => {
                    setTitle(e.target.value);
                    validator.current.showMessageFor("title");
                  }}
                />
                {validator.current.message("title", title, "required|min:5")}
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">قیمت دوره</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="قیمت دوره"
                  onChange={(e) => {
                    setPrice(e.target.value);
                    validator.current.showMessageFor("price");
                  }}
                />
                {validator.current.message("price", price, "required|integer")}
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">انتخاب تصویر</label>
              <div className="col-sm-9">
                <input
                  type="file"
                  name="imageUrl"
                  className="form-control"
                  onChange={(e) => {
                    setimageUrl(e.target.value);
                    validator.current.showMessageFor("imageUrl");
                  }}
                />
                {validator.current.message("imageUrl", imageUrl, "required")}
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">توضیحات</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  rows="3"
                  name="info"
                  placeholder="توضیحات"
                  onChange={(e) => {
                    setInfo(e.target.value);
                    validator.current.showMessageFor("info");
                  }}
                ></textarea>
                {validator.current.message("info", info, "required")}
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-12">
                <button type="submit" className="btn btn-success">
                  ثبت دوره
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  onClick={closeDialog}
                >
                  انصراف
                </button>
              </div>
            </div>
          </form>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default NewCourse;
