import React, { useState, createContext, useReducer, useContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    income: 0,
    expense: 0,
    transaction: []
}

export const context = createContext();

export default function GlobalState({ children }) {

    const [state, dispatch] = useReducer(AppReducer, initialState);


    function AddTransaction(newTransaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: newTransaction
        });
    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function AddIncome(amount){
        dispatch({
            type: 'ADD_INCOME',
            payload:amount
        })
    }

    function AddExpense(amount){
        dispatch({
            type: 'ADD_EXPENSE',
            payload:amount
        })
    }


    return (
        <context.Provider value={{ state,AddIncome,AddExpense,deleteTransaction,AddTransaction }}>
            {children}
        </context.Provider>
    )
}