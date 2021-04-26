import React from 'react';

export default (state = [], action) => {
    switch (action.type) {

        case "All_COURSES":
            return [...action.payload]
        case "ADD_COURSE":
            return [...action.payload];
        case "DELETE_COURSE":
            return [...action.payload];
        case "EDIT_COURSE":
            return [...action.payload];

        default:
            return state;
    }
}

