import * as actionTypes from './actionTypes';

export const fetchMovie = (id) =>{
    return {
        type: actionTypes.FETCH_MOVIE,
        id: id
    };
};

export const fetchMovieStart = () =>{
    return {
        type: actionTypes.FETCH_MOVIE_START
    };
};

export const fetchMovieSuccess = (movie)=>{
    return {
        type: actionTypes.FETCH_MOVIE_SUCCESS,
        movie: movie
    };
}

export const fetchMovieFailed = (message)=>{
    return {
        type: actionTypes.FETCH_MOVIE_FAIL,
        message: message
    };
}

export const clearMovie = () =>{
    return {
        type: actionTypes.CLEAR_MOVIE
    };
};