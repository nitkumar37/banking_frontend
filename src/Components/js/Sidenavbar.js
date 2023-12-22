import profilepic from "../images/profilepic.jpg"
import "../css/sidenavbar.css"

export default function Sidenavbar(){
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
    <a href="./deposit.html" className="nav-button"><div id="deposit"><i className="fas fa-wallet"></i><span>Deposit</span></div></a>
    <a href="./withdraw.html" className="nav-button"><div id="withdraw"><i className="fas fa-inr"></i><span>Withdrawal</span></div></a>
    <hr/>
    
    <a href="./fd.html" className="nav-button"><div id="fd"><i className="fas fa-solid fa-vault"></i><span>Fixed Deposit</span></div></a>
    <a href="./loan.html" className="nav-button"><div id="loan"><i className="fas fa-solid fa-hand-holding-usd"></i><span>Loan</span></div></a>
    <hr/>
    <a href="./credit.html" className="nav-button"><div id="credit"><i className="fas fa-solid fa-credit-card"></i><span>Credit Card</span></div></a>
    <div id="nav-content-highlight"></div>
  </div>
  <input id="nav-footer-toggle" type="checkbox"/>
  <div id="nav-footer">
    <div id="nav-footer-heading">
      <div id="nav-footer-avatar"><img src={profilepic} alt="hero"/></div>
      <div id="nav-footer-titlebox"><a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public" target="_blank">X</a><span id="nav-footer-subtitle">Admin</span></div>
      <label htmlFor="nav-footer-toggle"><i className="fas fa-caret-up"></i></label>
    </div>
    <div id="nav-footer-content">
      <p>Welcome Mr.X <br/>Thank you for being a wonderful customer</p>
    </div>
  </div>
</div>
</div>

    );
}