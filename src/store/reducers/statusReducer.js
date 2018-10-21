import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initialState = {
    loading: false,
    error: false,
    errorMessage: '',
    playerShown: false
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


const showPlayer = (state)=>{
    return updateObject(state,{playerShown: true});
}

const hidePlayer = (state)=>{
    return updateObject(state,{playerShown: false});
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
        case actionTypes.SHOW_PLAYER: return showPlayer(state);
        case actionTypes.HIDE_PLAYER: return hidePlayer(state);
        default: return state;
    }
}

export default reducer;