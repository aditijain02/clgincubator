class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      
     const lowercase=message.toLowerCase()
     
     if(lowercase.includes("hello") ){

    this.actionProvider.greet()
    }


    if(lowercase.includes("branch") || lowercase.includes("branchs")){

      this.actionProvider.branchs()
      }


    if(lowercase.includes("it") ){

        this.actionProvider.handleIT()
        }

    if(lowercase.includes("cse")|| lowercase.includes("cs") ){

          this.actionProvider.handleCSE()
          }
    if(lowercase.includes("ece") || lowercase.includes("ec") ){

            this.actionProvider.handleECE()
          }
    if(lowercase.includes("civil") ){

            this.actionProvider.handleCivil()
          }
    if(lowercase.includes("mechanical") ){

            this.actionProvider.handleMechanical()
          }
    if(lowercase.includes("fees") ){

            this.actionProvider.fees()
          }
    if(lowercase.includes("bus") ){

            this.actionProvider.bus()
          }
    if(lowercase.includes("time") || lowercase.includes("timing") ){

            this.actionProvider.time()
          }

    if(lowercase.includes("avg") || lowercase.includes("average")||lowercase.includes("pakage")  ){

            this.actionProvider.avg()
    }  
    
    if(lowercase.includes("highest") || lowercase.includes("pakage")  ){

      this.actionProvider.highest()
}  
    

  }
  }
  
  export default MessageParser; 