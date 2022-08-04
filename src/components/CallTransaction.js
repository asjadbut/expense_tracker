import React, {useContext} from 'react';
import Transaction from './Transaction';
import {context} from '../context/GlobalState';

export default function CallTransaction() {
    const {state} = useContext(context);
    
    return (
        <div>
            {state.transaction.map(item => 
            ( <Transaction key={item.id} transaction={item} /> ))}        
        </div>
    );
}