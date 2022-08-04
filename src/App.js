import React, { useContext } from 'react';
import ExpenseTracker from './components/ExpenseTrracker'
import GlobalState from './context/GlobalState';
import CallTransaction from './components/CallTransaction';

export default function App() {

    return (
        <div>
            <GlobalState>
                <ExpenseTracker/>
            </GlobalState>
        </div>
    );
}