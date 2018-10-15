import * as actionTypes from './actionTypes';

export const fetchContentsFail = ()=>{
    return {
        type: actionTypes.FETCH_CONTENTS_FAIL,
    };
}