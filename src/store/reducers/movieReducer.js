import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initialState = {
    movie: []
};

const fetchMovieSuccess = (state,action)=>{
    return updateObject(state,{movie: action.movie});
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_MOVIE_SUCCESS: return fetchMovieSuccess(state,action);
        default: return state;
    }
}

export default reducer;