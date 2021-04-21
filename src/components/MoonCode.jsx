import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router";
import Course from "./Course/Course";
import MainLayout from "./Layouts/MainLayout";
import Login from "./Login/Login";
import jwt from "jsonwebtoken"
import Register from "./Register/Register";
import LogOut from "./Login/LogOut";
import { useSelector } from "react-redux";
import { paginate } from "../utils/paginate";
import ArchiveCourse from "./Course/ArchiveCourse";
import SingleCourse from "./Course/SingleCourse";


const MoonCode = () => {
    const courses = useSelector(state => state.courses);
    const indexCourses = paginate(courses,1,6)
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
                        <Route path="/login" exact component={Login} /> 
                        <Route path="/register" exact component={Register} /> 
                        <Route path="/logOut" exact component={LogOut} /> 
                        <Route path="/archiveCourse" exact component={ArchiveCourse} /> 
                        <Route path="/course/:id" exact component={SingleCourse} /> 
                        <Route path="/" exact render={()=> <Course courses={indexCourses} /> } /> 

                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    </Fragment>
  );
};

export default MoonCode;
