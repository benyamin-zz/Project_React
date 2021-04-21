import React from 'react';

export default (state=[],action)=>{
    switch (action.type) {
        case "All_COURSES":
            
            return [...action.payload]
    
        default:
           return state;
    }
}

