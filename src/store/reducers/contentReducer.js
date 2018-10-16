import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initialState = {
    sections: [],
    selected: []

};

const fetchSectionsSuccess = (state,action)=>{
    return updateObject(state,{sections: action.sections});
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_SECTIONS_SUCCESS: return fetchSectionsSuccess(state,action);
        default: return state;
    }
}

export default reducer;