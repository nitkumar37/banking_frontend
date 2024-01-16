import "../css/welcome.css"
import {Link} from "react-router-dom"

export default function Welcome(){
    return (
        <div>
        <div className="container-fluid welcome_background">
            
            <div className=" message-box" style={{"width": "80%"}}>
                <h1>Bank of India</h1>
                <p id="content">Today, tomorrow, together.</p>
                <Link to="login"><button className="btn  btn-outline-primary" type="submit" href="/Login.html">Login</button></Link>
                <Link to="signup"><button className="btn btn-outline-primary" type="submit">Sign up</button></Link>
            </div>

        </div>
        </div>
    );
}