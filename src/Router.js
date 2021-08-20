import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact  from './Contact';
import Faq from './Faq';
import LoginForm from './LoginForm';
import Latest from './Latest';

const Router = (props) =>{
return(
    <div>
        <BrowserRouter>
        <Navbar status={props.loggedin} /> 
        <Route exact path="/home" component={Home} />
        <Route exact path="/aboutus" component={About} />
        <Route path="/contactus" component={Contact}/>
        <Route path="/faq" component={Faq} />
        <Route path="/latest" component={Latest} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={Home} />
        <Footer />
        </BrowserRouter>
    </div>
)

}

export default Router;