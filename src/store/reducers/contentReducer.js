import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utils';

const initialState = {
    data: [],
    selected: []

};

const fetchContentsSuccess = (state,action)=>{
    return updateObject(state,{data: action.contents});
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_CONTENTS_SUCCESS: return fetchContentsSuccess(state,action);
        default: return state;
    }
}

export default reducer;