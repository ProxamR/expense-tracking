import { useState } from "react"



export default function NewTransaction({ontransaction}){
    const [textName,setTextName] = useState("")
    const [amount,setAmount] = useState(0) 
    const [idCounter,setIdCounter] = useState(0)
    function handlesubmit(e){
      e.preventDefault()
      const value ={
        id:idCounter,
        transactionName:textName,
        amount
      }
      ontransaction(value)
      setIdCounter(i=>i+1)
    }
    return(
      <div style={{marginTop:"40px"}}>
         <h2>Add new transaction</h2>
         <div className='horizontal'/>
         <form className='form' onSubmit={handlesubmit}>
          <label >Text</label><br/>
          <input style={{width:"400px", minHeight:"30px"}} value={textName} onChange={(e)=>setTextName(e.target.value)} type='text'></input><br/>
          <label>Amount<br/>(negative - expense, positive - income)</label>
          <input style={{width:"400px", minHeight:"30px"}} value={amount} onChange={(e)=>setAmount(e.target.value)} type='number'></input>
          <button  style={{width:"410px" ,  minHeight:"40px", marginTop:"10px" , backgroundColor:"#9c88ff", border:0, color:'white' , marginBottom:"40px"}}>Add Transaction</button>
         </form> 
      </div>
    )
  }