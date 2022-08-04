import React, {useContext} from 'react';
import { context } from '../context/GlobalState';

export default function Transaction(props) {
    var { deleteTransaction } = useContext(context);
    const sign = props.transaction.amount > 0 ? '+' : '-';
    var amtBorder = '';
    sign == '+' ? amtBorder = 'pos' : amtBorder = 'neg';
    
    return (
        <div className='wrapper' style={{display:'flex'}}>
            <button id='delete' onClick={()=>deleteTransaction(props.transaction.id)}>x</button>
            <div className={'transaction ' + amtBorder}>
                <p className='trans-item'>{props.transaction.text}</p>
                <p className='trans-amt'>{sign}${Math.abs(props.transaction.amount)}</p>
            </div>
        </div>
    )
}