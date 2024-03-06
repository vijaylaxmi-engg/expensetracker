import React  , {useContext}from 'react'
import  {GlobalContext} from '../context/GlobalState'
import Transactionlist from './Transactionlist';

 export const Transaction = () => {
const  {transactions}  = useContext(GlobalContext);


  return (
    <div>
     <h3>History</h3>
     <ul  className="list">
     {transactions.map(transactions=>( <Transactionlist  key={transactions.id}  transactions={transactions} ></Transactionlist> ))}
     
     
        
   
      
      
        
      </ul>


    </div>
  )
}

