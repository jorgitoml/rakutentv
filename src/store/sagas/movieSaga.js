import {put} from 'redux-saga/effects';
import axios from '../../axios.contents';

import * as actions from '../actions/index';

export function* fetchMovieSaga(action){
    yield put(actions.fetchMovieStart());
    try{
        const movieData = yield axios.get(`/v3/movies/${action.id}`);
        yield put(actions.fetchMovieSuccess(movieData.data.data));

    }catch(error){
        const message = error.response ? error.response.data.errors[0].message : "Intentelo pasados unos minutos";
        yield put(actions.fetchMovieFailed(message));
    }
}