import { useState } from 'react';
import './App.css';
import Balance from './Balance';
import IncomeAndExpense from './IncomeAndExpense';
import History from './History';
import NewTransaction from './NewTransaction';

function App() {
  const [totalTransactionRecord,SetTotalTransactionRecord] = useState("");
  function handleTransaction(value){
    SetTotalTransactionRecord([...totalTransactionRecord,value])
  }
  return (
    <div className="App">
      <h2 >Expense Tracker</h2>
      <Balance onBalance={totalTransactionRecord} />
      <IncomeAndExpense  onBalance={totalTransactionRecord}/> 
      <History  onList={totalTransactionRecord} onSetList={SetTotalTransactionRecord} />
      <NewTransaction ontransaction={handleTransaction}/>
    </div>
  );
}



export default App;
