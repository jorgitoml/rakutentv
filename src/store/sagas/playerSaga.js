import {put} from 'redux-saga/effects';
import axios from '../../axios.rakuten';

import * as actions from '../actions/index';

export function* initPlayerSaga(action){
    
    yield put(actions.showPlayer());

    try{
        
        const bodyFormData = new FormData();
        bodyFormData.set('audio_language', 'SPA');
        bodyFormData.set('audio_quality', '2.0');
        bodyFormData.set('content_id', action.id);
        bodyFormData.set('content_type', 'movies');
        bodyFormData.set('device_serial', 'device_serial_1');
        bodyFormData.set('device_stream_video_quality', 'FHD');
        bodyFormData.set('player', 'web:PD-NONE');
        bodyFormData.set('subtitle_language', 'MIS');
        bodyFormData.set('video_type', 'trailer');
        
        const streamData = yield axios.post('/v3/me/streamings',bodyFormData);

        yield put(actions.loadPlayer(streamData.data.data.stream_infos));

    }catch(error){
        yield put(actions.errorPlayer(error.message));
    }
}