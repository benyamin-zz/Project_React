import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Course from "../Course/Course";
import MainLayout from "./Layouts/MainLayout";
import Login from "./Login/Login";


const MoonCode = () => {
  return (
    <Fragment>
        <Switch>
            <Route path={["/"]} >
                <MainLayout>
                    <Switch>
                        <Route path="/" exact component={Course} /> 
                        <Route path="/login" exact component={Login} /> 
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    </Fragment>
  );
};

export default MoonCode;
