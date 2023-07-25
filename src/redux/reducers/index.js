import {combineReducers} from 'redux';
import transactionReducer from "./transactionReducer";

const rootReducer = combineReducers({
    TRANSACTIONS: transactionReducer
});

export default rootReducer;