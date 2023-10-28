import {ADD_TRANSACTION, FETCH_ALL_TRANSACTIONS} from "./types";
import axios from "axios";

export const fetchAllTransactions = () => async (dispatch) => {
    try {
        axios.get('http://localhost:8080/api/transaction')
            .then(function (response) {
                // handle success
                dispatch({
                    type: FETCH_ALL_TRANSACTIONS,
                    payload: response.data.map(transaction => ({
                        key: transaction.id,
                        ...transaction
                    }))
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    } catch (err) {
        console.log(err);
    }
};

export const addTransaction  = (values) => async (dispatch) => {
    try {
        const request = {
            ...values
        }
        axios.post('http://localhost:8080/api/transaction',request)
            .then(function (response) {
                // handle success
                dispatch({
                    type: ADD_TRANSACTION,
                    payload: {key:response.data.id, ...response.data}
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    } catch (err) {
        console.log(err);
    }
};