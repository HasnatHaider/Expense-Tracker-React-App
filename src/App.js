import React from 'react';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
        <div className='container d-flex' style={{margin: '30px auto', letterSpacing: '1px'}}>
          <div className='row gx-md-5'>
          <div className='col-md-6'>
          <Header />
          <Balance />
          <IncomeExpense />
          </div>
          <div className='col-md-6'>
          <TransactionList />
          <AddTransaction />
          </div>
          </div>
        </div>
    </GlobalProvider>
  );
}

export default App;
