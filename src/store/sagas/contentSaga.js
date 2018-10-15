import {put} from 'redux-saga/effects';
import axios from '../../axios.contents';

import * as actions from '../actions/index';

export function* fetchContentsSaga(){
    yield put(actions.fetchContentsStart());
    try{
        
        const getPopularesTaquilla = ()=>{
            return axios.get('/v3/lists/populares-en-taquilla');
        }

        const getEstrenosFamilia = ()=>{
            return axios.get('/v3/lists/estrenos-para-toda-la-familia');
        }

        const getEstrenosTaquilla = ()=>{
            return axios.get('/v3/lists/estrenos-imprescindibles-en-taquilla');
        }

        const getEstrenosEsp = ()=>{
            return axios.get('/v3/lists/estrenos-espanoles');
        }

        const getPerdiste = ()=>{
            return axios.get('/v3/lists/si-te-perdiste');
        }

        const getXMen = ()=>{
            return axios.get('/v3/lists/especial-x-men');
        }

        const getPreferidasSemana = ()=>{
            return axios.get('/v3/lists/nuestras-preferidas-de-la-semana');
        }

        const [populares, familia, taquilla, esp, perdiste, xmen, preferidas] = yield axios.all(
            [
                getPopularesTaquilla(), 
                getEstrenosFamilia(),
                getEstrenosTaquilla(),
                getEstrenosEsp(),
                getPerdiste(),
                getXMen(),
                getPreferidasSemana()
            ]
        );

        const contentData = {lalala:1234};

        yield put(actions.fetchContentsSuccess(contentData));

    }catch(error){
        console.log(error);
        yield put(actions.fetchContentsFailed());
    }
}