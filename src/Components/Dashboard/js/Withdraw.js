import img from "../../images/withdraw.jpg";
import "../css/functions_dash.css"
export default function Withdraw(){
    return (
        <div className="view" id="deposit_div_container">
      <div className="deposit_div">
        <div
          className="brand-logo"
          style={{background: `url(${img}) no-repeat center center/cover`}}></div>
        <div className="brand-title" style={{"fontSize": "1.77rem"}}>Withdraw Money</div>
        <div className="inputs">
          <div className="field-group">
            <i className="icons fas fa-inr"></i>
            <input type="number" placeholder="1000" />
          </div>
          <button type="submit">Confirm</button>
        </div>
      </div>
    </div>
    );
}