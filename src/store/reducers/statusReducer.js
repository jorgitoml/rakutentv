import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initialState = {
    loading: false,
    error: false
};

const fetchSectionsStart = (state)=>{
    return updateObject(state,{loading: true});
}

const fetchSectionsFail = (state)=>{
    return updateObject(state,{error: true});
}

const fetchSectionsSuccess = (state)=>{
    return updateObject(state,{loading: false});
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_SECTIONS_START: return fetchSectionsStart(state);
        case actionTypes.FETCH_SECTIONS_FAIL: return fetchSectionsFail(state);
        case actionTypes.FETCH_SECTIONS_SUCCESS: return fetchSectionsSuccess(state);
        default: return state;
    }
}

export default reducer;