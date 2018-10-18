import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initialState = {
    loading: false,
    error: false,
    errorMessage: ''
};

const fetchStart = (state)=>{
    return updateObject(state,{loading: true, errorMessage: ''});
}

const fetchSuccess = (state)=>{
    return updateObject(state,{loading: false});
}

const fetchSectionsFail = (state)=>{
    return updateObject(state,{error: true, errorMessage: 'Intentelo pasados unos minutos'});
}

const fetchMovieFail = (state, action)=>{
    return updateObject(state,{error: true, errorMessage: action.message});
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_SECTIONS_START: 
        case actionTypes.FETCH_MOVIE_START:
            return fetchStart(state);
        case actionTypes.FETCH_SECTIONS_SUCCESS: 
        case actionTypes.FETCH_MOVIE_SUCCESS:
            return fetchSuccess(state);
        case actionTypes.FETCH_SECTIONS_FAIL: return fetchSectionsFail(state);
        case actionTypes.FETCH_MOVIE_FAIL: return fetchMovieFail(state,action);
        default: return state;
    }
}

export default reducer;