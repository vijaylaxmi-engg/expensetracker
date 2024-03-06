
import './App.css';
import Header from './component/Header';
import Balance from './component/Balance'
import Incomeexpense from './component/Incomeexpense';
import     { Addtransaction }  from './component/Addtransaction';
import  { GlobalProvider} from './context/GlobalState'
import   { Transaction  } from './component/Transaction';

function App() {
  return (
    <GlobalProvider>
   
    <Header></Header>
    <div className='container'>
      <Balance></Balance>
      <Incomeexpense></Incomeexpense>
      <Transaction></Transaction>
    <Addtransaction></Addtransaction>
    </div>
      </GlobalProvider>
  );
}

export default App;
