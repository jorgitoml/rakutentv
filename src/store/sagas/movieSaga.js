import {put} from 'redux-saga/effects';
import axios from '../../axios.rakuten';

import * as actions from '../actions/index';

export function* fetchMovieSaga(action){
    yield put(actions.fetchMovieStart());
    try{
        const movieData = yield axios.get(`/v3/movies/${action.id}`);
        yield put(actions.fetchMovieSuccess(movieData.data.data));

    }catch(error){
        yield put(actions.fetchMovieFailed(error.message));
    }
}