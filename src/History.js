
 export default function History({onList , onSetList}){
    function DeleteValue(value){
      console.log(value)
      onSetList( onList.filter(i=>i.id !== value))
    }
    
    return(
    <div>
       <h2 style={{marginBottom:"1px"}}>History</h2>
       <div className='horizontal'/>
       <ul style={{padding:"0px"}}>
        {onList !=="" && onList.map((record, i) => (
          <ol key={i}  className='shadow' style={{ borderRight:  `5px solid ${record.amount>0?"green":"red"}`}}
          >
            {record.transactionName}
            {record.amount>0?
             <span>+${record.amount}</span> 
            :<span>-${Math.abs(record.amount)}</span>}
            <button  onClick={()=>DeleteValue(record.id)} className="delete-btn">x</button>
        </ol>
        ))}
       </ul>
       
    
    </div>)
  }
  