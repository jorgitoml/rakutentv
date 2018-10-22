import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {fetchSectionsSaga} from './contentSaga';
import {fetchMovieSaga} from './movieSaga';
import {initPlayerSaga} from './playerSaga';

export function* watchSectionsSaga(){
    yield takeEvery(actionTypes.FETCH_SECTIONS, fetchSectionsSaga);
}

export function* watchMovieSaga(){
    yield takeEvery(actionTypes.FETCH_MOVIE, fetchMovieSaga);
}

export function* watchPlayerSaga(){
    yield takeEvery(actionTypes.INIT_PLAYER, initPlayerSaga);
}