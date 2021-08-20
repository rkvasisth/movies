import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png';

class Navbar extends Component{

    render(){
        return(
        <>
        <div className="bs-example">
        <nav className="navbar navbar-expand-md navbar-dark ">
        <Link to='/home' className="navbar-brand">
                <img src={logo} height="40" alt="CoolBrand" />
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav center">
                <Link to='/home' className="nav-item nav-link active">Home</Link>
                   <Link to='/aboutus' className="nav-item nav-link">About Us</Link>
                   <Link to='contactus' className="nav-item nav-link">Contact Us</Link>
                   <Link to='faq' className="nav-item nav-link">FAQs</Link>
                </div>
                <div className="navbar-nav ml-auto">
                {(this.props.status)?<Link to='/login' className="nav-item nav-link">Login</Link> : <Link to='/login' className="nav-item nav-link">Logout</Link>}
                
                </div>
            </div>
        </nav>
    </div>


       
    </>
    )
    }
}

export default Navbar;