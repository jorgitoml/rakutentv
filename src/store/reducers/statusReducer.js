import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initialState = {
    loading: false,
    error: false
};

const fetchContentsStart = (state)=>{
    return updateObject(state,{loading: true});
}

const fetchContentsFail = (state)=>{
    return updateObject(state,{error: true});
}

const fetchContentsSuccess = (state)=>{
    return updateObject(state,{loading: false});
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_CONTENTS_START: return fetchContentsStart(state);
        case actionTypes.FETCH_CONTENTS_FAIL: return fetchContentsFail(state);
        case actionTypes.FETCH_CONTENTS_SUCCESS: return fetchContentsSuccess(state);
        default: return state;
    }
}

export default reducer;