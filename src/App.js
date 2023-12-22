
import './App.css';
import Sidenavbar from "./Components/js/Sidenavbar.js";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/js/Dashboard.js';
import Deposit from "./Components/js/Deposit.js";


function App() {
  return (
    
    <div>

    <Sidenavbar/>
    {/* <BrowserRouter>
      <Routes>

          <Route path="/" element={Dashboard}>
          <Route path = "/Deposit" element={Deposit} />
          <Route path = "/Withdraw" element={Deposit } />
          <Route path = "/fd" element={Deposit} />
          <Route path = "/Loan" element={Deposit} />
          <Route path = "/Credit" element={Deposit} />
          
        </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
