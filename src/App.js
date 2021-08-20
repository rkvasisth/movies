import React from 'react';
import './App.css';
import { Component } from 'react';
import LoginForm from './LoginForm';
import Router from './Router';
class App extends Component{
 state = {
   loggedin:false
 }

Login = (status)=>{
this.setState({
  loggedin:true
})
}

  render(){  
    return(
      <div>
        
        {
          (this.state.loggedin === true)?<Router status={this.state.loggedin} />:<LoginForm Login={this.Login} />
        }
      </div>
      )
  }
}
export default App;
