
import React from 'react';
import Card from'./Card.js';

const cardarray=({notes})=>{

    
    return(
        <div>
        {
           notes.map((user,i)=>{
    
          return (
          <Card 
              key={i}
              id={notes[i].id}
              name={notes[i].name}
              mail={notes[i].mail}
         />
                 );
        })
        }
        </div>
    );
}
export default cardarray;
