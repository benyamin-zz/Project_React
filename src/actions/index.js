import { hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import axios from "../services/api"
import history from '../utils/history';
import jwt from "jsonwebtoken"


export const login = (formValues,show)=>{
    show(true);
    console.log(JSON.stringify(formValues))
    return async (dispatch)=>{
        try {
            const {data,status}= await axios.post("login",JSON.stringify(formValues)) 
            if(status == 200) {
                const decodeToken = jwt.decode(data.token);
                console.log(decodeToken.user)
                dispatch({
                    type: "LOGIN",
                    payload: decodeToken.user
                })
         
                toast.success("با موفقیت وارد شدید", {
                    position: "top-right",
                    closeOnClick: true,
                  });
                 localStorage.setItem("token",data.token)
                 show(false);
                 history.push("/")

            }
        } catch (error) {
            toast.error("مشکلی پیش امده است", {
                position: "top-right",
                closeOnClick: true,
              });
            console.log(error)
            show(false);

        }
    }


}

export const register = (formValues)=>{
    return async (dispatch)=>{
        try {
            const {data,status}= await axios.post("register",JSON.stringify(formValues)) 
            if(status== 201){
                // dispatch({
                //     type: "LOGIN",
                //     payload:data
                // })
                dispatch(hideLoading())
                console.log(data)
                toast.success("ثبت نام با موفقیت ثبت شد", {
                    position: "top-right",
                    closeOnClick: true,
                  });
                  history.push("/login")

            }
        } catch (error) {
            toast.error("مشکلی پیش امده است", {
                position: "top-right",
                closeOnClick: true,
              });
            console.log(error)
        }
    }
}

export const logOut = ()=>{
    return async dispatch => {
        await dispatch({ type: "LOGOUT", payload: {} });
    };
}