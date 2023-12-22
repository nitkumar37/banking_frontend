import profilecardpic from "../images/profilepic.jpg"
import "../css/profilecard.css"

export default function Dashboard() {
  return (
    <div>
      <div id="profile_card">
        <div className="card-container">
          <img
            className="round"
            src={profilecardpic}
            alt="user"
          />
          <h3>Ricky Park</h3>
          <h6>
            <i className="fas fa-solid fa-phone"></i>
            <span>&emsp;+91-1234567890</span>
          </h6>
          <h1>
            <i className="fas fa-solid fa-envelope"></i>
            <span>&emsp;temporary@publicisgroupe.net</span>
          </h1>

          <p className="address">
            Street Number 56, Unitech Infospace Tower A Building 2, Dundahera
            Village, Sector 21, Gurugram, Haryana 122016
          </p>

          <div className="card-container account">
            <h6>Account Details</h6>
            <p>
              <i className="fas fa-solid fa-id-card"></i>
              <span>&emsp;1</span>
            </p>
            <p>
              <i className="fas fa-solid fa-inr"></i>
              <span>&emsp;2000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

