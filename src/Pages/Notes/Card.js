import React from 'react';
import Noteimg from'./note.png';
import './Notes.css'


const card =({name,mail,id})=>{
    return(

        <div class='hi' className=' bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc ' >
            <img  className="img" alt='notes' src={Noteimg}/>
            <div>
                <h2 >{name}</h2>
                
            </div>
        </div>
    );
}
export default card;