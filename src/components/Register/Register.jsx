import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { register } from "../../actions";
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, forceUpdate] = useState("");

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "این فیلد نباید خالی بماند",
        email: "فیلد ایمیل به درستی وارد نشده است",
        min: "این فیلد نباید کمتر از 5 کاراکتر باشد",
      },
      element: (messages) => <div style={{ color: "red" }}>{messages}</div>,
    })
  );
 
  const dispatch = useDispatch();

  const handelSubmit = (e)=>{
    e.preventDefault();
    const user = {fullname,email,password}
    if (validator.current.allValid()) {
      dispatch(showLoading())
      dispatch(register(user))
    } else {
      validator.current.showMessages();
      forceUpdate(1);
      dispatch(hideLoading())


    }
    
  }
  return (
    <div>
      <form className="form-horizontal" onSubmit={handelSubmit}>
        <div className="form-group">
          <label className="col-sm-2 control-label">
            نام کاربری
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="fullname"
              className="form-control"
              placeholder="نام کاربری"
              value={fullname}
              onChange={(e)=>{
                setFullName(e.target.value)
                validator.current.showMessageFor("fullname")
              }}
            />
            {validator.current.message("fullname",fullname,"required|min:5")}
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">ایمیل</label>
          <div className="col-sm-10">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="ایمیل"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
                validator.current.showMessageFor("email")
              }}
            />
            {validator.current.message("email", email, "required|email")}
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">گذرواژه</label>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="گذرواژه"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
                validator.current.showMessageFor("password")
              }}
            />
            {validator.current.message("password",password,"required|min:5")}
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">
              ثبت نام
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
