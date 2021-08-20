import React from 'react';
import { Component } from 'react';


class Faq extends Component{
render(){
return(<div>
    <div className="container page-pad-top">
    <div className="row">
        <div className="col-lg-12 col">
    <h1>FAQs</h1>
    <div id="accordion">
    <div className="card">
      <div className="card-header">
        <a className="card-link" data-toggle="collapse" href="#collapseOne">
          Collapsible Group Item #1
        </a>
      </div>
      <div id="collapseOne" className="collapse show" data-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
        Collapsible Group Item #2
      </a>
      </div>
      <div id="collapseTwo" className="collapse" data-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header">
        <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
          Collapsible Group Item #3
        </a>
      </div>
      <div id="collapseThree" className="collapse" data-parent="#accordion">
        <div className="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  </div>
    </div>)

}

}

export default Faq;