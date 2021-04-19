import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../actions';
import history from '../../utils/history';

const LogOut = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem("token");
        dispatch(logOut());
        history.push("/");
    }, []);

    return null;
}

export default LogOut;
