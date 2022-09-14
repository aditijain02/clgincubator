import MotionHoc from "./../MotionHoc";

import  {Chatbot} from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import 'react-chatbot-kit/build/main.css'
import config from './config';
import './Documents.css';
import bot from './Chatbot.svg'


const DocumentsComponent = () => {
  return (
    <div className="App"  >
      <div className="img3"><img src={bot}/></div>
      <div className="bot">
      <header className="App-header">
        <div className="box">
       <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
        
  </header>
  
</div>
    </div>
  );
};

const Documents = MotionHoc(DocumentsComponent);

export default Documents;
