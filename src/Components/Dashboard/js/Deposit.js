import "../css/functions_dash.css"
import  img from "../../images/deposite.jpg"


export default function Deposit(){
    return (
        <div className="view " id="deposit_div_container">
      <div className="deposit_div">
        <div
          className="brand-logo"
          style={{background: `url(${img}) no-repeat center center/cover`}}>
          </div>
        <div className="brand-title">Deposit Money</div>
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