import { hideLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import axios from "../services/api"
import history from '../utils/history';

export const login = (formValues,show)=>{
    show(true);
    console.log(JSON.stringify(formValues))
    return async (dispatch)=>{
        try {
            const {data,status}= await axios.post("login",JSON.stringify(formValues)) 
            if(status == 200) {
                dispatch({
                    type: "LOGIN",
                    payload: data
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