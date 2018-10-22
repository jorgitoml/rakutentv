import {put} from 'redux-saga/effects';
import axios from '../../axios.rakuten';

import * as actions from '../actions/index';

export function* fetchSectionsSaga(){
    yield put(actions.fetchSectionsStart());
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

        const sectionsData = Array.of(populares.data.data, familia.data.data, taquilla.data.data, esp.data.data, perdiste.data.data, xmen.data.data, preferidas.data.data);

        yield put(actions.fetchSectionsSuccess(sectionsData));

    }catch(error){
        yield put(actions.fetchSectionsFailed(error.message));
    }
}