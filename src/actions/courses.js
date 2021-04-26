import React from 'react';
import axios from '../services/api'
import { toast } from 'react-toastify';

export const getAllCourse = ()=>{
    return async (dispatch) =>{
        try {
            const {data,status} = await axios.get("courses");
            if(status === 200) {
                dispatch({
                    type: "All_COURSES",
                    payload: data.courses
                })
            }
        } catch (error) {
            
        }
    }
}

export const getSingleCourse = (courseId)=>{
    return async (dispatch) => {
        try {
            const {data,status} = await axios.get(`course/${courseId}`);
            if(status === 200) {
                dispatch({
                    type: "GET_COURSE",
                    payload: data.course
                })
            }
        } catch (error) {
            
        }
    }
}
export const AddCourse = (course) =>{
    return async (dispatch , getState) =>{
        try {
            const  courses = await getState().courses
            const  token = await localStorage.getItem("token")
            const {data,status}= await axios.post("course",course,{ headers: {"Authorization" : `Bearer ${token}`} })

            if(status===201){
                await dispatch({
                    type:"ADD_COURSE",
                    payload:[...courses, data.course]
                })
                toast.success("ایتم مورد نظر با موفقیت ثبت شد", {
                    position: "top-right",
                    closeOnClick: true,
                  });

            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const EditCourse =(courseId,updateCourse) =>{
    return async (dispatch,getState) =>{
        const courses = [...getState().courses];
        const  token = await localStorage.getItem("token")
        const filterCours = courses.filter(course => course._id !== courseId)

        try {
            const {data,status}= await axios.put(`course/${courseId}`,updateCourse,{ headers: {"Authorization" : `Bearer ${token}`} })
            if (status === 200) {
                await dispatch({
                    type:"EDIT_COURSE",
                    payload:[...filterCours, data.course]
                })
                toast.success("ایتم مورد نظر با موفقیت ویرایش شد", {
                    position: "top-right",
                    closeOnClick: true,
                  });
            }

        } catch (error) {
            console.log(error)
        }
    }

}

export const DeleteCourse = (courseId)=>{
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const  token = await localStorage.getItem("token")
        const filteredCourses = courses.filter(
            (course) => course._id !== courseId
        );

        try {
            await dispatch({
                type: "DELETE_COURSE",
                payload: [...filteredCourses],
            });
            const {status}= await axios.delete(`course/${courseId}`,{ headers: {"Authorization" : `Bearer ${token}`} })

            if (status === 200) { toast.success("ایتم مورد نظر با موفقیت ویرایش شد", {
                position: "top-right",
                closeOnClick: true,
              });}
        } catch (ex) {
            await dispatch({ type: "DELETE_COURSE", payload: [...courses] });
        }
    };
}