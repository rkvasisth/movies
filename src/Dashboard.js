import React from 'react';
import { Component } from 'react';
import LoginForm from './LoginForm';
import Router from './Router';
import { useState } from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    render(){
        return(<div>
        <LoginForm />
            
        </div>)
    }
}

export default Dashboard;
