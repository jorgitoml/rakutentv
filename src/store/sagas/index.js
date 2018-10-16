import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {fetchSectionsSaga} from './contentSaga';

export function* watchSectionsSaga(){
    yield takeEvery(actionTypes.FETCH_SECTIONS, fetchSectionsSaga);
}