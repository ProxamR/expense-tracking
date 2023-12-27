export default function IncomeAndExpense({onBalance}){
  var totalIncome = 0;
  var totalExpense = 0;
  if (onBalance!==""){
    totalIncome = onBalance.reduce((previousValue,currentValue)=>
    {return ((Number(currentValue.amount))> 0 ? Number(previousValue)+ Number(currentValue.amount):Number(previousValue)) },0)
    totalExpense = onBalance.reduce((previousValue,currentValue)=>
    {return ((Number(currentValue.amount))< 0 ? Number(previousValue)+ Number(currentValue.amount):Number(previousValue)) },0)
  }
    
   return(
    <div className='box'>
      <div>
        <h3 style={{marginBottom:"5px"}} >INCOME</h3>
        <span style={{color:"green"}}>{Math.abs(totalIncome)}</span>
      </div>
      <div className='vertical'/>
      <div>
        <h3 style={{marginBottom:"5px"}} >EXPENSE</h3>
        <span style={{color:"red"}}>{Math.abs(totalExpense)}</span>
      </div>
    </div>
  )
}
