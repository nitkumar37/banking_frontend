import profilepic from "../../images/profilepic.jpg"
import "../css/sidenavbar.css"
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidenavbar=(props)=>{
  const Navigate = useNavigate();
  localStorage.clear();
  const Logout=()=>{
  props.handleShowNav();
  Navigate("/") 
}

    return (
<div>        
<div id="nav-bar">
  <input id="nav-toggle" type="checkbox"/>
  <div id="nav-header">
    <div id="nav-title" ><i className="fas fa-bank" style={{"fontSize": "24px"}}></i>Bank Of India</div>
    <label htmlFor="nav-toggle"><span id="nav-toggle-burger"></span></label>
    <hr/>
  </div>
  <div id="nav-content">
    <div className="nav-button" id="deposit"><Link to="/deposit"><i className="fas fa-wallet"></i><span> Deposit</span></Link></div>
    <div className="nav-button" id="withdraw"><Link to="/customer/withdraw"><i className="fas fa-inr"></i> <span>Withdrawal</span></Link></div>
    <hr/>
    
    <div className="nav-button" id="fd"><Link to="/customer/fd"> <i className="fas fa-solid fa-vault"></i><span>Fixed Deposit</span></Link></div>
    <div className="nav-button" id="loan"><Link to="/customer/loan"><i className="fas fa-solid fa-hand-holding-usd"></i><span>Loan</span></Link></div>
    <hr/>
    <div className="nav-button" id="credit"><Link to="/customer/credit"><i className="fas fa-solid fa-credit-card"></i><span>Credit Card</span></Link></div>
    <hr/>
    <div className="nav-button" id="Transaction History"><Link to="/customer/transaction"><i className="fas far fa-calendar"></i><span>Transaction History</span></Link></div>
    <div className="nav-button" id="logout" onClick={Logout}><i className="fas fa fa-sign-out"></i><span>Logout</span></div>
    <div id="nav-content-highlight"></div>
  </div>
  <input id="nav-footer-toggle" type="checkbox"/>
  <div id="nav-footer">
    <div id="nav-footer-heading">
      <div id="nav-footer-avatar"><Link to="/customer"><img src={profilepic} alt="hero"/></Link></div>
      <div id="nav-footer-titlebox"><Link to="/customer">X</Link><Link to="/"><span id="nav-footer-subtitle">Admin</span></Link></div>
      <label htmlFor="nav-footer-toggle"><i className="fas fa-caret-up"></i></label>
    </div>
    <div id="nav-footer-content">
      <p>Welcome Mr.X <br/>Thank you for being a wonderful customer</p>
    </div>
  </div>
</div>
<Outlet/>
</div>
  

    );
  
}
export default Sidenavbar;