import React from "react";
import loginimg from "../../Loginimg.svg";
import "./style.scss";
import MotionHoc from "./../MotionHoc";

import { useHistory } from "react-router";

const Reg = () => {
   
  let history= useHistory();
  
    return (
      <div className="base-container" >
        <div className="header">Teacher's Login</div>
        <div className="content">
          <div className="image">
            <img src={loginimg} />
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
          <button type="button" className="btn"  onClick={()=>{history.push("/Anouncement");}} >
            Login
          </button>
        </div>
      
      </div>
    );
  }



  const Calender = MotionHoc(Reg);

  export default Calender;
  