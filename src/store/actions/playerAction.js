import * as actionTypes from './actionTypes';

export const showPlayer = () =>{
    return {
        type: actionTypes.SHOW_PLAYER
    };
};

export const hidePlayer = () =>{
    return {
        type: actionTypes.HIDE_PLAYER
    };
};

