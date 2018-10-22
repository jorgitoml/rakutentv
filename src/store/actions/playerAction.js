import * as actionTypes from './actionTypes';

export const initPlayer = (id) =>{
    return {
        type: actionTypes.INIT_PLAYER,
        id: id
    };
};

export const showPlayer = () =>{
    return {
        type: actionTypes.SHOW_PLAYER
    };
};

export const loadPlayer = (streams) =>{
    return {
        type: actionTypes.LOAD_PLAYER,
        streams: streams
    };
};

export const hidePlayer = () =>{
    return {
        type: actionTypes.HIDE_PLAYER
    };
};

export const errorPlayer = (message) =>{
    return {
        type: actionTypes.ERROR_PLAYER,
        message: message
    };
};
