import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router";
import Course from "../Course/Course";
import MainLayout from "./Layouts/MainLayout";
import Login from "./Login/Login";
import jwt from "jsonwebtoken"
import Register from "./Register/Register";
import LogOut from "./Login/LogOut";


const MoonCode = () => {

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            const decodeToken = jwt.decode(token);
        }
        else{
        }
    }, [])
  return (
    <Fragment>
        <Switch>
            <Route path={["/"]} >
                <MainLayout>
                    <Switch>
                        <Route path="/" exact component={Course} /> 
                        <Route path="/login" exact component={Login} /> 
                        <Route path="/register" exact component={Register} /> 
                        <Route path="/logOut" exact component={LogOut} /> 
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    </Fragment>
  );
};

export default MoonCode;
