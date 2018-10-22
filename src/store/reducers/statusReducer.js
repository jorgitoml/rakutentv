import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initialState = {
    loading: false,
    error: false,
    errorMessage: '',
    player: {
        shown: false,
        error: false,
        errorMessage: '',
        sources: null
    }
};

const fetchStart = (state)=>{
    return updateObject(state,{loading: true, errorMessage: ''});
}

const fetchSuccess = (state)=>{
    return updateObject(state,{loading: false});
}

const fetchSectionsFail = (state, action)=>{
    return updateObject(state,{error: true, errorMessage: action.message});
}

const fetchMovieFail = (state, action)=>{
    return updateObject(state,{error: true, errorMessage: action.message});
}

const showPlayer = (state)=>{

    return updateObject(state,{player: updateObject(state.player,{shown: true})});
}

const loadPlayer = (state, action)=>{
    return updateObject(state,{player: updateObject(state.player,{sources: action.streams})});
}

const hidePlayer = (state)=>{
    return updateObject(state,{player: updateObject(state.player,{shown: false, error: false, errorMessage:'', sources:null})});
}

const errorPlayer = (state, action)=>{
    return updateObject(state,{player: updateObject(state.player,{error: true, errorMessage: action.message})});
}



const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_SECTIONS_START: 
        case actionTypes.FETCH_MOVIE_START:
            return fetchStart(state);
        case actionTypes.FETCH_SECTIONS_SUCCESS: 
        case actionTypes.FETCH_MOVIE_SUCCESS:
            return fetchSuccess(state);
        case actionTypes.FETCH_SECTIONS_FAIL: return fetchSectionsFail(state,action);
        case actionTypes.FETCH_MOVIE_FAIL: return fetchMovieFail(state,action);
        case actionTypes.SHOW_PLAYER: return showPlayer(state);
        case actionTypes.LOAD_PLAYER: return loadPlayer(state,action);
        case actionTypes.HIDE_PLAYER: return hidePlayer(state);
        case actionTypes.ERROR_PLAYER: return errorPlayer(state,action);
        default: return state;
    }
}

export default reducer;