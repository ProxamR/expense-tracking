

export default function Balance({onBalance}){
    var totalBalance = 0;
    onBalance!==""  &&
    (totalBalance = onBalance.reduce((previousValue,currentValue)=>
    {return Number(previousValue)+ Number(currentValue.amount) },0))
  
    return(
      <div>
        <h2 style={{marginBottom:"1px"}}>Your Balance</h2>
        <h1 style={{marginTop:"1px"}}>${totalBalance}</h1>
      </div>
    )
  }
  