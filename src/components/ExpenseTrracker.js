import React, { useState, useContext } from 'react';
import CallTransaction from './CallTransaction';
import { context } from '../context/GlobalState';


export default function ExpenseTracker() {

    var { state,AddIncome,AddExpense,AddTransaction } = useContext(context);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [balance, setBALANCE] = useState(0);


    const addTransaction = () => {
        if (amount >= 0) {
            AddIncome(parseInt(state.income)+parseInt(amount));
            setBALANCE(parseInt(balance) + parseInt(amount));
            AddTransaction({id:parseInt(state.transaction.length+1),text:text,amount:amount})
        }
        else {
            if (balance > 0 && (parseInt(balance) + parseInt(amount)) >= 0) {
                AddExpense(Math.abs(parseInt(state.expense) - parseInt(amount)));
                setBALANCE(parseInt(balance) + parseInt(amount));
                AddTransaction({id:parseInt(state.transaction.length+1),text:text,amount:amount})
            }
            else{
                alert("Not enough balance!");
            }

        }
        

    }




    return (
        <div>
            <div className='et-page'>
                <div className='et-card'>
                    <h2 className='title'>Expense Tracker</h2>
                    <p>Your Balance</p>
                    <h2>${balance}</h2>
                    <div className='et-stats-card'>
                        <div className='et-stats-income'>
                            <p style={{ marginBottom: "5px" }}>INCOME</p>
                            <p style={{ color: "green" }}>+${state.income}</p>
                        </div>
                        <div className='et-stats-expense'>
                            <p style={{ marginBottom: "5px" }}>EXPENSE</p>
                            <p style={{ color: "red" }}>-${state.expense}</p>
                        </div>
                    </div>
                    <br></br>
                    <h3>History</h3>
                    <hr></hr>
                    <CallTransaction />
                    <h3 style={{ marginTop: '30px' }}>Add new transaction</h3>
                    <hr></hr>
                    <p>Text</p>
                    <input onChange={(e) => setText(e.target.value)} placeholder='Enter text' />
                    <h4>Amount</h4>
                    <p style={{ marginTop: '5px' }}>(negative-expense, positive-income)</p>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount' />
                    <button onClick={addTransaction}>Add transaction</button>
                </div>
            </div>
        </div>
    );
}