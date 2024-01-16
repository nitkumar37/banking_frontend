import profilecardpic from "../../images/profilepic.jpg";
import "../css/profilecard.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const userdetails = {
    phone: "",
    name: "",
    id: "",
    address: "",
    balance: "",
    username: "",
  };
  const [userData, setUserData] = useState({});

  
  useEffect(() => {
    let login_cred = JSON.parse(localStorage.getItem("login_cred"));
    let data = localStorage.getItem("login_data");
    if (data == null) {
      const options = {
        method: "GET",
        url: `http://localhost:4000/bank/getcustomer/` + login_cred.username,
        headers: {
          Authorization: "Bearer " + login_cred.jwtToken,
        },
      };
      axios
        .request(options)
        .then((response) => {
          userdetails.address = response.data.customerAddress;
          userdetails.balance = response.data.balance;
          userdetails.id = response.data.id;
          userdetails.name = response.data.customerName;
          userdetails.phone = response.data.customerPhone;
          userdetails.username = response.data.username;
          setUserData(userdetails);
          localStorage.setItem("login_data", JSON.stringify(userdetails));
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setUserData(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <div id="profile_card">
        <div className="card-container">
          <img className="round" src={profilecardpic} alt="user" />
          <h3>{userData.name}</h3>
          <h6>
            <i className="fas fa-solid fa-phone"></i>
            <span>&emsp;{userData.phone}</span>
          </h6>
          <span>
            <i className="fas fa-solid fa-envelope"></i>
            <h7>&emsp;{userData.username}</h7>
          </span>
          <br />
          <span>
            <i className="fas fa fa-address-card-o"></i>
            <h7>&emsp;{userData.address}</h7>
          </span>

          <div className="card-container account">
            <h6>Account Details</h6>
            <p>
              <i className="fas fa-solid fa-id-card"></i>
              <span>&emsp;{userData.id}</span>
            </p>
            <p>
              <i className="fas fa-solid fa-inr"></i>
              <span>&emsp;{userData.balance}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
