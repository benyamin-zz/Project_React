import React from 'react';
import axios from '../services/api'
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