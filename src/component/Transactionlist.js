import React ,{useContext} from 'react'
import  { GlobalContext } from '../context/GlobalState'



function Transactionlist({transactions}) {
    const {deletetransaction }= useContext(GlobalContext)
    const sign = transactions.amount < 0 ? '-' : '+';

    
  return (
    <li className= {transactions.amount < 0 ? 'minus' : 'plus'}>
      
      {transactions.text}<span>{sign}₹{Math.abs(transactions.amount)}</span><button className="delete-btn"  onClick={()=> deletetransaction(transactions.id)} >x</button>
    </li>
  )
}

export default Transactionlist
