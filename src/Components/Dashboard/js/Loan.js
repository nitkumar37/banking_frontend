import img from "../../images/loan.jpg"
import "../css/functions_dash.css"
export default function Loan(){
    return(
        <div className="view" id="deposit_div_container">
      <div className="deposit_div">
        <div
          className="brand-logo"
          style={{background: `url(${img}) no-repeat center center/cover`}}
        ></div>
        <div className="brand-title">Loan</div>
        <div className="inputs">
          <div className="field-group">
            <i className="icons fas fa-file-invoice-dollar"></i>
            <select aria-label="Example select with button addon">
              <option selected>Loan Type...</option>
              <option value="1">Car Loan</option>
              <option value="2">Home Loan</option>
              <option value="3">Personal Loan</option>
            </select>
          </div>
          <br />
          <div className="field-group">
            <i className="icons fas fa-inr"></i>
            <input type="number" placeholder="Amount" />
          </div>
          <br />
          <div className="field-group">
            <i className="icons fas fa-calendar"></i>
            <input type="number" placeholder="years" />
          </div>

          <button type="submit">Confirm</button>
        </div>
      </div>
    </div>
    );
}