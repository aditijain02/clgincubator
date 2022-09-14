import React from "react";
import MotionHoc from "./../MotionHoc";
import loginimg from "../../Loginimg.svg";
import "./style.scss";
import Sidebar from "../../Sidebar";
import { useHistory } from "react-router";


const Login = (props) => {
   
 let history= useHistory();
  
    return (
      <div>
        
      <div className="base-container" >
       
        <div className="header">Student's Login</div>
        <div className="content">
          <div className="image">
            <img src={loginimg} alt="img" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
        </div>
      </div>
    );
  }

  const Team = MotionHoc(Login);

  export default Team;
  