import React from 'react';
import {createStore,applyMiddleware,compose } from "redux";
import reducers from "../reducers"
import thunk from 'redux-thunk';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const  store = createStore(reducers,composeEnhancers(applyMiddleware(thunk,loadingBarMiddleware())))