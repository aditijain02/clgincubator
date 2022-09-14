class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   greet=()=>{
     const message=this.createChatBotMessage("How may I help you ")
     this.setChatbotMessage(message)
   }

   branchs=()=>{
    const message=this.createChatBotMessage("Branchs Offered",
    {
      widget:"options"
    }
    )
    this.setChatbotMessage(message)
  }

  handleIT=()=>{
    const message=this.createChatBotMessage(" Information Technology branch consists of topics related to Information management (storage and retrieving) , Information security, Software engineering, Computer Science, web scripting etc. ")
    this.setChatbotMessage(message)
  }
  
  handleCSE=()=>{
    const message=this.createChatBotMessage(" Computer Science Engineering (CSE) encompasses a variety of topics that relates to computation, like analysis of algorithms, programming languages, program design, software, and computer hardware.")
    this.setChatbotMessage(message)
  }
  
  handleECE=()=>{
    const message=this.createChatBotMessage(" Electronics and Communication Engineering (EC) This branch of engineering develops everyday devices such as transistors, integrated circuits and printed circuit boards (PCBs) which can be used in computers,")
    this.setChatbotMessage(message)
  }
  
  handleCivil=()=>{
    const message=this.createChatBotMessage(" Civil engineering comprises the design, construction, and maintenance of the physical and natural built environments.")
    this.setChatbotMessage(message)
  }
  
  handleMechanical=()=>{
    const message=this.createChatBotMessage(" Mechanical engineering is an engineering branch that combines engineering physics and mathematics principles with materials science to designanalyze, manufacture, and maintain mechanical systems.It is one of the oldest and broadest of the engineering branches. ")
    this.setChatbotMessage(message)
  }

  fees=()=>{
    const message=this.createChatBotMessage(
    <ul>
      <li>IT:100000</li>
      <li>CS:100000</li>
      <li>ECE:100000</li>
      <li>Civil:100000</li>
      <li>Mechanical:100000</li>
    </ul>)
    this.setChatbotMessage(message)
  }
  
  bus=()=>{
    const message=this.createChatBotMessage("Bus fees= 12000 per year")
    this.setChatbotMessage(message)
  }

  
  
  time=()=>{
    const message=this.createChatBotMessage(
    <ul>
      <li>1st and 2nd- 8:30 to 2:30</li>
      <li>3rd and 4th- 10:30 to 5:00</li>
      </ul>)
    this.setChatbotMessage(message)
  }
  
  
  avg=()=>{
    const message=this.createChatBotMessage("avg pakage=4.5L")
    this.setChatbotMessage(message)
  }

  
  highest=()=>{
    const message=this.createChatBotMessage("highest pakage=9L")
    this.setChatbotMessage(message)
  }



  


   setChatbotMessage=(message)=>{
     this.setState(state=>({...state,messages:[...state.messages,message]}))
   }
 
}


 export default ActionProvider;  