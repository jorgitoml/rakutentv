import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initialState = {
    movie: null
};

const fetchMovieSuccess = (state,action)=>{
    return updateObject(state,{movie: action.movie});
}

const clearMovie = (state)=>{
    return updateObject(state,{movie: null});
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_MOVIE_SUCCESS: return fetchMovieSuccess(state,action);
        case actionTypes.CLEAR_MOVIE: return clearMovie(state);
        default: return state;
    }
}

export default reducer;