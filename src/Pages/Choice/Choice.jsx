import MotionHoc from "./../MotionHoc";
import './Choice.css';
import Notes from './note.png';
import Mic from './microphone.png'
import { useHistory } from "react-router";
const ChoiceComponent = () => {

  let history= useHistory();

  return <div >
    <div className="logout">
    <button className="log" onClick={()=>{history.push("/");}} >
        <h3 className="NA">Logout</h3>
        </button>
    </div>
    <div className="icon">
    <div className="a">
    <img src={Notes} className="imga" />
    <button onClick={()=>{history.push("/Notes");}} >
      <h1 className="NA">Notes</h1>
      </button>
    </div>
    <div className="b">
    <img src={Mic} className="imgb"/>
      <button onClick={()=>{history.push("/Seeanouncement");}} >
        <h1 className="NA">Announcement</h1>
        </button>
    </div>
    </div>
  </div>

};

const Choice = MotionHoc(ChoiceComponent);

export default Choice;
