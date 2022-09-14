import MotionHoc from "./../MotionHoc";
import './Seeanouncement.css';
//import Notes from './note.png'

const SeenouncementComponent = () => {
  return (
    
    <div className="frame2">
      <div  >
     <h4 className="heading"> Anouncements!!</h4>
     </div>
     <div className="anounce3" >
        <input className=' input2 pa3   ba b--green bg-lightest-blue'
        type ='search'
         placeholder='Enter teacher name' 
        />
    </div>

     <div className="show">
        
     <div className=" msg bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
     <h3 className="subshow">Quiz of maths is scheduled on 29/10/21</h3>
     </div>
     <div className=" msg bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
     <h3 className="subshow">Quiz of CN is scheduled on 27/10/21 </h3>
     </div>
     <div className=" msg bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
     <h3 className="subshow">Quiz of OS is scheduled on 25/10/21</h3>
     </div>
     </div> 
    </div>
    

   
      

    
  )
};

const Seenouncement = MotionHoc(SeenouncementComponent);

export default Seenouncement;
