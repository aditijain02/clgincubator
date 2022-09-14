import MotionHoc from "./../MotionHoc";
import './Home.css'
import Tilt from 'react-tilt'
import Hom from './Home.svg'


const HomeComponent = () => {
  return (
    <div className="head">
    
     
<Tilt className="Tilt" >
 <div className="img2">
     <img src={Hom}/>
     </div>

</Tilt>
    


     <div className="rest">
    <div className="college">

    <h2>College </h2>
    </div> 
    
    <div className="incubator"><h2>Incubator</h2></div>
    <div className="line"><h2>A one stop destination for students and teachers to connect.... </h2>
    </div>
    </div>
   </div>
    
  );

};

const Home = MotionHoc(HomeComponent);

export default Home;

