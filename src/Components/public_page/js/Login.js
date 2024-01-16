import {Link, json} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {toast } from "react-toastify";
import { LoginServiceFunction } from "../../../services/BackendServices";
import { Outlet } from "react-router-dom";
import { asyncLocalStorage } from "../../../services/HelperService";

const Login=(props)=>{
  const Navigate = useNavigate();
  function signin(event){  
      event.preventDefault();
      let loginPassword=document.forms.login_form.password.value;
      let loginUsername = document.forms.login_form.customerEmail.value;
      
      if(!validateusername(loginUsername)){
        return false;
      } 

      var login_data = {
       "username":loginUsername,
        "password":loginPassword
      };

      LoginServiceFunction(login_data).then((resp)=>{
        var auth = {
          jwtToken:resp.jwtToken,
          username:resp.username
        }
          localStorage.setItem("login_cred",JSON.stringify(auth));
          Navigate("/customer") 
                   
        }).catch((error)=>{
          console.log(error);
        toast.error("Invalid Credentials !!" ,{position: toast.POSITION.TOP_LEFT,});
        }); 
    }

    function validateusername(username){
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(username))){
            toast.error("Enter a valid username",{position: toast.POSITION.TOP_LEFT,});
            return false;
        }
        else if(username == null || username===""){
         toast.error("Username cannot be null",{position: toast.POSITION.TOP_LEFT,});
         return false;
        }
        return true;
      }

    return(
        <div>
        <form className="form-container background" name="login_form" onSubmit={signin}>
        <div className="container text-center">
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>

                <div className="col boundary">
                    <div className="mb3">
                        <h1 className="headings"> Welcome to Bank of India</h1>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" placeholder="Username" name="customerEmail" aria-label="Username" aria-describedby="basic-addon1"/>
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                          </svg></span>
                        <input type="text" className="form-control" placeholder="Password" name="password" aria-label="Username" aria-describedby="basic-addon1"/>
                      </div>
                    <div className="row">
                        <div className="col">
                           <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                        <div className="col">
                            <Link className="remove_underline" to="./forgot_password.html">Forgot Password</Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <Outlet/>
    </form>
    </div>
    );
}
export default Login;