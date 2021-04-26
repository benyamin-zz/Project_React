import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions";
import { Sugar } from "react-preloaders2";
import { Zoom } from "react-preloaders2";
import SimpleReactValidator from "simple-react-validator";

import "./login.css";

const Login = (props) => {
  // const {loading} = useSelector(state => state.user)
  const [loading, setLoading] = useState(false);
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
  const show = (element) => {
    setLoading(element);
  };
 
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    const user = { email, password };
    e.preventDefault();
    
    if (validator.current.allValid()) {
      
      dispatch(login(user, show));
    } else {
      validator.current.showMessages();
      forceUpdate(1);

    }
  };

  return (
    <div className="container">
      {loading ? (
        <Zoom time={0} color="#fc03d7" customLoading={loading} />
      ) : null}
      <form className="form-horizontal formLogin" onSubmit={handelSubmit}>
        <div className="form-group has-feedback">
          <label className="col-sm-2 control-label">ایمیل</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validator.current.showMessageFor("email");
              }}
          
            />
            {validator.current.message("email", email, "required|email")}
          </div>
        </div>

        <div className="form-group  has-feedback">
          <label className="col-sm-2 control-label">گذره واژه</label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validator.current.showMessageFor("password");
              }}
            />
            {validator.current.message("password", password, "required")}
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox" /> مرا به خاطر بسپار
              </label>
            </div>
          </div>
        </div>

 
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">
              ورود
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
