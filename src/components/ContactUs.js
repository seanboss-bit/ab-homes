import React from "react";

const ContactUs = () => {
  return (
    <div className="contact">
      <video src="https://tlgur.com/d/8BOj2r0G" loop autoPlay muted className="vid-mob"></video>
      <div className="container">
        <div className="contact-form-inner">
          <div className="contact-form-side">
            <h1>contact us</h1>
            <p>get in touch with us for more information</p>
            <form className="contact-form">
              <div className="contact-name">
                <div className="contact-name-box">
                  <p className="input-name">first name</p>
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div className="contact-name-box">
                  <p className="input-name">last name</p>
                  <input type="text" placeholder="Enter Last Name" />
                </div>
              </div>
              <div className="contact-email">
                <p className="input-name">email</p>
                <input type="email" placeholder="Enter Email" />
              </div>
              <div className="contact-phone">
                <p className="input-name">number</p>
                <input type="text" placeholder="Enter Phone Number" />
              </div>
              <div className="contact-message">
                <p className="input-name">message</p>
                <textarea></textarea>
              </div>
              <p>
                please if you are a registered user, please use the help panel
                available in the dashboard
              </p>
              <input type="submit" value="Send" className="btn-contact" />
            </form>
          </div>
          <div className="contact-form-pic">
            <img
              src="https://images.pexels.com/photos/3602253/pexels-photo-3602253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
