import {createReducer} from "@reduxjs/toolkit";
import {ADD_TRANSACTION, FETCH_ALL_TRANSACTIONS} from "../actions/types";

const initState = {result:[]};

const transactionReducer = createReducer(initState, {
    [FETCH_ALL_TRANSACTIONS]: (state, {payload}) => {
        return {...state, result:payload}
    },
    [ADD_TRANSACTION]: (state, {payload}) => {
        return {...state,result:[...state.result,payload]}
    },
});

export default transactionReducer;