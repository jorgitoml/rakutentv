import * as actionTypes from './actionTypes';

export const fetchSections = () =>{
    return {
        type: actionTypes.FETCH_SECTIONS
    };
};

export const fetchSectionsStart = () =>{
    return {
        type: actionTypes.FETCH_SECTIONS_START
    };
};

export const fetchSectionsSuccess = (sections)=>{
    return {
        type: actionTypes.FETCH_SECTIONS_SUCCESS,
        sections: sections
    };
}

export const fetchSectionsFailed = ()=>{
    return {
        type: actionTypes.FETCH_SECTIONS_FAIL
    };
}