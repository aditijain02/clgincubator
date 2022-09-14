import MotionHoc from "./../MotionHoc";
import './Anouncement.css';
import Announcement from './Announcement.svg';

const AnouncementComponent = () => {
  return (
    
    <div className="frame">
    <div className="imgi">
    <img className="i" src={Announcement}/>
    </div>
      <div >
     <h1>Make an Announcement!!</h1>
     </div>
     <div className="anounce1 " >
        <input className=' input pa3   ba b--green bg-lightest-blue'
        type ='search'
         placeholder='Please make an Announcement' 
        />
        </div>
        <div className="anounce2 " >
        <input className=' input pa3   ba b--green bg-lightest-blue'
        type ='date'
         placeholder='Please enter Date' 
        />
        </div>
    </div>
    

   
      

    
  )
};

const Anouncement = MotionHoc(AnouncementComponent);

export default Anouncement;
