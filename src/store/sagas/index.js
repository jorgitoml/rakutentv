import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {fetchContentsSaga} from './contentSaga';

export function* watchContentSaga(){
    yield takeEvery(actionTypes.FETCH_CONTENTS, fetchContentsSaga);
}