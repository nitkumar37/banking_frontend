import "../css/login.css"
import {Link, Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SignupServiceFunction } from "../../../services/BackendServices";
import { toast } from "react-toastify";


export default function Signup(){
  const Navigate = useNavigate();
  function Validateform(event){  
      event.preventDefault();
      var name = document.forms.signup_form.customerName.value;
      var password=document.forms.signup_form.password.value;
      var username = document.forms.signup_form.customerEmail.value;
      var confirmpassword = document.forms.signup_form.confirmpassword.value;
      var address = document.forms.signup_form.customerAddress.value;
      var aadhar = document.forms.signup_form.customerAadhar.value;
      var phone = document.forms.signup_form.customerPhone.value; 
      var Balance = document.forms.signup_form.initialBalance.value;
        
      
      if (name==null || name===""){  
        toast.error("Name can't be blank",{position: toast.POSITION.TOP_LEFT,});  
          return false;  
      }else if(!validate_password(password)){  
          return false;  
      }else if(password.localeCompare(confirmpassword) != 0){
        toast.error("password and confirm password doesnt match",{position: toast.POSITION.TOP_LEFT,});
          return false;
      } else if(!validateusername(username)){
        return false;
      } else if(address == null || address===""){
        toast.error("Address can't be blank",{position: toast.POSITION.TOP_LEFT,});  
          return false;
      }else if(aadhar.length<12 || aadhar.length>12){
        toast.error("Invalid Aadhar",{position: toast.POSITION.TOP_LEFT,});  
          return false;
      }else if(!validatephone(phone)){
        toast.error("invalid phone numnber",{position: toast.POSITION.TOP_LEFT,});
          return false;
      }else if(!validatebalance(Balance)){
        return false;
      }

      const data = {"customerName":name,
      "customerEmail":username,
      "password":password,
      "customerAddress":address,
      "customerPhone":phone,
      "customerAadhar":aadhar,
      "balance":Balance+".0",
      "times":"0",
      "loan":"false",
      "creditCard":"false"
      }

    SignupServiceFunction(data).then((resp)=>{
      console.log(resp);
      Navigate('/login');
    }).catch((error)=>{
      toast.error("User already exist" ,{position: toast.POSITION.TOP_LEFT,});
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


  function validate_password(password){
      if(password.length < 8){
        toast.error("Password must be at least 8 characters long",{position: toast.POSITION.TOP_LEFT,});
        return false;
      }
      else if(!(/\d/.test(password) )){
        toast.error("Password must contain atleast one Number",{position: toast.POSITION.TOP_LEFT,});
        return false;
      }else if(!(/[A-Z]/.test(password))){
        toast.error("Password must contain atleast one Upper Case",{position: toast.POSITION.TOP_LEFT,});
        return false;
      }else if(!(/[a-z]/.test(password))){
        toast.error("Password must contain atleast one Lower Case",{position: toast.POSITION.TOP_LEFT,});
        return false;
      }
      else if(!(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password))){
        toast.error("Password must contain atleast one Special Character",{position: toast.POSITION.TOP_LEFT,});
        return false;
      }
      else return true;   
  }

  function validatephone(phone){
      if(phone.length != 10)return false;
      else if((/[A-Z]/.test(phone)) || (/[a-z]/.test(phone)) || (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(phone)))return false;
      else return true;
  }

  function validatebalance(Balance){
    if(parseFloat(Balance)<1000){
      toast.error("Initial Balance cannot be less than ₹ 1000",{position: toast.POSITION.TOP_LEFT,});
      return false;
    } else if(Balance==""){
      toast.error("Please enter initial balance",{position: toast.POSITION.TOP_LEFT,});
      return false;
    }
    return true;
  }



    return(
      <div>
        <form className="form-container background-signup" name="signup_form" style={{"padding-top": "20px"}}  method="post" onSubmit={Validateform}>
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
                            <input type="text" name="customerEmail" className="form-control" placeholder="Username"/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                              </svg></span>
                            <input type="password" className="form-control" name="password" placeholder="Password"/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                              </svg></span>
                            <input type="password" className="form-control" name="confirmpassword" placeholder="Confirm Password" />
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                              </svg></span>
                            <input type="text" className="form-control" name="customerName" placeholder="Name" />
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                              </svg></span>
                            <input type="text" className="form-control" name="customerAddress" placeholder="Address"/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon6"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg></span>
                            <input type="number" className="form-control" name="customerPhone" placeholder="Phone number"/>
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon7"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-badge" viewBox="0 0 16 16">
                                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
                              </svg></span>
                            <input type="text" className="form-control" name="customerAadhar" placeholder="Aadhar Card" />
                          </div>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon7"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                
                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                              </svg></span>
                            <input type="text" className="form-control" name="initialBalance" placeholder="Deposit Initial Balance of 1K" />
                          </div>
                          
                        <div className="row">
                            <div className="col">
                                <button type="submit" name="Submit" className="btn btn-primary">Signup</button>
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