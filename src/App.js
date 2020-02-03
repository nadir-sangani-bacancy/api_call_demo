import React from 'react';
import logo from './logo.svg';
import './App.css';
import './globalscss.scss';
import Nav_comp from './nav_comp';
import User_list from './user_list';
import User_details from './user_details';

class App extends React.Component{

  constructor()
  {
    super()
    this.state ={
      id : ""
    }
  }

  callbackfunction=(e)=>{
    this.setState({id : e})
  }

  render(){
    return(
      <div>
        <Nav_comp />
        <div className="container">
        <User_list callbackfunction={this.callbackfunction}/>
        <User_details id={this.state.id}/> 
        </div>
      </div>
    )
    
  }
}

export default App;
