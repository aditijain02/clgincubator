import React,{Component}from 'react';
import Cardarray from'./Cardarray.js';
import notes from'./Notelist.js';

import Scroll from'./Scroll';
import 'tachyons';


import Searchbox from './Searchbox.js';
import './Notes.css';


class Notes extends Component{
    constructor(){
        super()
        this.state={
            notes:notes,
            searchfield: '',

        }
    }

    /*componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then (users=>this.setState({notes:users})
        );
       

    }*/
    onsearchchange=(event) => {
         this.setState({searchfield:event.target.value})
         }

    
    render() {
        
        const filterednotes=this.state.notes.filter(notes=>{
            return notes.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.notes.length=== 0)
        {
             return <h1>loading</h1>
        }
        else
        {

    return (
        <div className='tc'>
            <h1 className="title" >NOTES</h1>
            <Searchbox searchchange={this.onsearchchange}/>
           <Scroll>
            <Cardarray notes={filterednotes}/>
           </Scroll>
        </div>
    );
        }
  }
}

export default Notes;