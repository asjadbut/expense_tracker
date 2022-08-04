import React from 'react'
export default (state,action) => {
    switch(action.type){
        case 'ADD_INCOME':
            return {...state,income: parseInt(action.payload)}
        case 'ADD_EXPENSE':
            return {...state,expense:parseInt(action.payload)}

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.transaction.filter(transaction => transaction.id!==action.payload)
            }
        case 'ADD_TRANSACTION':
            return {...state, transaction: [...state.transaction,action.payload]}
        default:
            return state
    }
}