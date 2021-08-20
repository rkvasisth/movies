import React from 'react';

const Contact = (props)=>{
    

return(
    <div>

    <div className="container page-pad-top contact-us">
    <div className="row">
        <div className="col-lg-12 col"><h1>Contact Us</h1><br/></div>
        
    </div>
    <div className="row">
    <div className="col-lg-4 col">
        <div className="card text-center">
            <p className="text-center"><i className="fa fa-envelope-o" aria-hidden="true"></i></p>
            <a href="mailto:rkvasisth@gmail.com">myemail.mydomain.com</a>
        </div>
    </div>
    <div className="col-lg-4 col">
    <div className="card text-center">
    <p className="text-center"><i className="fa fa-phone-square" aria-hidden="true"></i></p>
    <a href="tel:+4733378901">+47 333 78 901</a>
        </div>

    </div>
    <div className="col-lg-4 col">
    <div className="card text-center">
    <p className="text-center"><i className="fa fa-map-marker" aria-hidden="true"></i></p>
    <p>Central Park II Rd, Sector 148, Gurugram, Haryana 1220474
</p>
        </div>
    </div>
    </div>
    <br/><br/>
    <div className="row">
        <div className="col-lg-12">
            <h2>Feel free to Contact Us</h2>
            <br/>
        <div className="form-card">
            <form className="" >
                    <div className="form-group">
                        <label className="control-label " htmlFor="name">Name:</label>
                        
                        <input type="text" className="form-control" id="name" placeholder="Enter Your Name" />
                        
                    </div>
                    <div className="form-group">
                        <label className="control-label " htmlFor="email">Email:</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter Your Email" />
                    
                    </div>
                    <div className="form-group">
                        <label className="control-label " htmlFor="msg">Message:</label>
                        <textarea className="form-control " id="msg" rows="3" placeholder="Enter your message"></textarea>
                  
                    </div>
                    <div className="form-group">
                        <div className="text-center">
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </div>
                    </div>
                    </form>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </div>
    </div>
    </div>
    </div>
    
)

}



export default Contact;