import img from "../../images/fd.jpg"
import "../css/functions_dash.css"
export default function Fd(){
    return (
        <div className="view" id="deposit_div_container">
  <div className="deposit_div">
    <div className="brand-logo" style={{background: `url(${img}) no-repeat center center/cover`}}></div>
    <div className="brand-title">Fixed Deposit</div>
    <div className="inputs">
      <div className="field-group">
        <i className="icons fas fa-inr"></i>
        <input type="number" placeholder="1000" />
      </div>
      <br/>
      <div className="field-group">
        <i className="icons fas fa-calendar"></i>
        <input type="number" placeholder="1000" />
      </div>
      
      <button type="submit">Confirm</button>
    </div>
  </div>
  </div>
    );
}