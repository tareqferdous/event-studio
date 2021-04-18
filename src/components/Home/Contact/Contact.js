import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="container contact-content">
                <h2 className="pb-4" style={{color:'lightSalmon', textAlign: 'center'}}>Contact Us</h2>
            <div className="row mb-3">
                <div className="col-md-4 offset-md-1 mt-5">
                    <h3>Let us handle your event, professionally.</h3>
                    <p>The professional photographer's directory comes to you where you can find professional photographers in quick, convenient, & efficient manner.</p>
                </div>
                <div className="col-md-6 offset-md-1">
                    <form action="">
                        <input type="email" name="" className="form-control" placeholder="Email" id=""/>
                        <input type="text" name="" className="form-control my-4" placeholder="Your Name" id=""/>
                        <textarea id="message" className="form-control mb-4" rows="8" cols="72" placeholder="Your Message"></textarea>
                        <button className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
            <div className="footer text-center">
                <small>copyright Orange labs 2020</small>
            </div>
            </div>
        </div>
    );
};

export default Contact;