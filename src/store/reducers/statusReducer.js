import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: false
};

const reducer = (state=initialState, action)=>{
    switch(action.type){
        //TODO
        default: return state;
    }
}

export default reducer;