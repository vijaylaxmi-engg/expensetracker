import React ,{ createContext ,useReducer} from 'react';
import AppReducer from './AppReducer';

//initialstate;-
const initalState ={
    transactions: []
}


//create context:-
export const GlobalContext = createContext(initalState);




//provider component


export const GlobalProvider =({children}) =>{
  const [state , dispatch] = useReducer(AppReducer , initalState);

//actions:-

  function deletetransaction(id){
    dispatch({
     type:'DELETE_TRANSACTION',
     payload:id
 
   });
   
 
 }


 //

 function addtransaction(transactions){
  dispatch({
   type:'ADD_TRANSACTION',
   payload: transactions

 });
 

}

  return(<GlobalContext.Provider value={{transactions: state.transactions,deletetransaction,addtransaction}}>{children}</GlobalContext.Provider>)
}






