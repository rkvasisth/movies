import React from 'react';
import { Component } from 'react';
import  './LoginForm.css';



class LoginForm extends Component{
    state = {
    email:'',
    password:'',
    error:'',
    loggedin:''

    }
    submitHandler = e =>{
        e.preventDefault();
        if(this.state.email === 'admin@admin.com' && this.state.password === 'admin'){
           this.props.Login(true)
            //this.props.history.push('/home')
          }else{
            this.setState({
                error:'Please Enter Valid Credentials'
            })
            
            // console.log(props)
          }  
    }
    render(){
        
        return(
            <div>
           <div className="container-fluid h-100vh">
            <div className="row h-100vh">
                <div className="login-box">
                <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                <form  onSubmit={this.submitHandler}>
            <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input type="text" className="form-control" placeholer="Enter Email" autoComplete="off" onChange={e => this.setState({email:e.target.value})} value={this.state.email} />
            </div>
            <div className="form-group">
                <label className="form-control-label">PASSWORD</label>
                <input type="password" className="form-control"  placeholer="Enter Password" autoComplete="off" onChange={e => this.setState({password:e.target.value})} value={this.state.password}/>
            </div>
            <div className="col-lg-12 loginbttm">
                <div className="col-lg-12 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                </div>
                <p class="red">{this.state.error}</p>
            </div>

            </form>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>)
        

    }
}


    // console.log(props);
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [error,setError] = useState('');
    // const [loggedin,setLoggedin] = useState(false);

    
      
      



// )

// }




   
    
    //validation to be added -- app.js to  here
    // redirect to home page..



export default LoginForm;