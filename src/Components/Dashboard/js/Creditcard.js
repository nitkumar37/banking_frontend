import "../css/creditcard.css"
export default function Creditcard(){
    return (
        <div className="body-creditcard">
    <div className="container-creditcard">
     <div className="wrapper">
       <div className="banner-image"> </div>
       <br/>
       <h1> Congratulations</h1>
       <p>You are eligible for our premium credit card</p>
      </div>
      <div className="button-wrapper"> 
      <button className="btn outline">DETAILS</button>
        <button className="btn fill">Apply NOW</button>
      </div>
        </div>
    </div>

    );
}