import * as actionTypes from './actionTypes';

export const fetchContents = () =>{
    return {
        type: actionTypes.FETCH_CONTENTS
    };
};

export const fetchContentsStart = () =>{
    return {
        type: actionTypes.FETCH_CONTENTS_START
    };
};

export const fetchContentsSuccess = (contents)=>{
    return {
        type: actionTypes.FETCH_CONTENTS_SUCCESS,
        contents: contents
    };
}

export const fetchContentsFailed = ()=>{
    return {
        type: actionTypes.FETCH_CONTENTS_FAIL
    };
}