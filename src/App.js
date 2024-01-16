
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from "./Components/public_page/js/Login.js"
import Signup from "./Components/public_page/js/Signup.js"
import Welcome from './Components/public_page/js/Welcome.js';
import Deposit from "./Components/Dashboard/js/Deposit.js"
import Dashboard from "./Components/Dashboard/js/Dashboard.js"
import Withdraw from "./Components/Dashboard/js/Withdraw.js";
import FD from "./Components/Dashboard/js/Fd.js";
import Loan from "./Components/Dashboard/js/Loan.js";
import Credit from "./Components/Dashboard/js/Creditcard.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcomeview from './views/Welcomeview.js';
import Dashboardview from './views/Dashboardview.js';
import Error from './Components/Error/js/Error.js';

const App=() =>{
  
  
  // const [showNav, setShowNav] = useState(true);
 
  // const handleShowNav = ()=>{
  //   setShowNav(!showNav);
  // }
  
  return (
    
    
    <div>
      <ToastContainer/>
      <Routes>
          <Route path='/' element={<Welcomeview/>}>
            <Route index element={<Welcome/>}/>
            <Route path = "login" element={<Login/>} />
            <Route path = "signup" element={<Signup/>} />
          </Route>
          
          <Route path='/customer' element={<Dashboardview/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='deposit' element={<Deposit/>}/>
            <Route path='withdraw' element={<Withdraw/>}/>
            <Route path='fd' element={<FD/>}/>
            <Route path='loan' element={<Loan/>}/>
            <Route path='credit' element={<Credit/>}/>
          </Route>

          <Route path='*' element={<Error/>}/>
          
      </Routes>
    </div>
    
  );
}
export default App;
