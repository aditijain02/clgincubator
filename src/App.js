import { Route, Switch, useLocation } from "react-router";
import Sidebar from "./Sidebar";
//import React, { useState } from 'react';

import  Seeanouncement from "./Pages/Seeanouncement/Seeanouncement";
import  Anouncement from "./Pages/Anouncement/Anouncement";
import  Home from "./Pages/Home/Home";
import  Choice from "./Pages/Choice/Choice";
import  Projects from "./Pages/About/Projects";
import  Documents from "./Pages/Chatbot/Documents";
import  Notes from "./Pages/Notes/Notes";
import "./App.scss";
import  Team from "./Pages/login/Login";
import  Calender from "./Pages/login/LoginTeacher";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .App-header{
    background-color:#d3e0fb;
    width:500px
  }

  .react-chatbot-kit-chat-bot-avatar-container {
    
    background-color: #d3e0fb;
    
}


  .react-chatbot-kit-chat-container{
    width:450px;
   
   
  }

  .react-chatbot-kit-chat-bot-message {
    
    margin-left: 5px;
    
}

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;



function App() {
  const location = useLocation();
  return (
    <>
     
    
        <Sidebar/>

        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/Seeanouncement" component={Seeanouncement}/>
            <Route path="/Notes" component={Notes}/>
           
            <Pages>
            <Route path="/Projects" component={Projects} />
            <Route path="/Choice" component={Choice}/>
            <Route path="/Anouncement" component={Anouncement}/>
            
            <Route path="/Documents" component={Documents} />
            <Route path="/Team" component={Team} />
            <Route path="/Calender" component={Calender} />
          
           
            </Pages>
         
            
          </Switch>
        </AnimatePresence>
          
        
      
        
      
    </>
  );
}

export default App;

