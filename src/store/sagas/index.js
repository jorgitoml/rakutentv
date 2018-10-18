import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {fetchSectionsSaga} from './contentSaga';
import {fetchMovieSaga} from './movieSaga';

export function* watchSectionsSaga(){
    yield takeEvery(actionTypes.FETCH_SECTIONS, fetchSectionsSaga);
}

export function* watchMovieSaga(){
    yield takeEvery(actionTypes.FETCH_MOVIE, fetchMovieSaga);
}