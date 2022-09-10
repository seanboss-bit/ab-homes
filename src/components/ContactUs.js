import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { publicRequest } from "../requestMethods";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
        type: "spring",
      },
    },
  };
  const sendMessage = async () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      toast.error("All Entries Are Required");
    } else if (phone.length > 11 || phone.length < 11) {
      toast.error("Pls Enter A valid phone Number");
    } else {
      try {
        const res = await publicRequest.post("/messages", {
          firstName,
          lastName,
          email,
          phone,
          message,
        });
        console.log(res);
        toast.success(res.data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="contact">
      <video
        src="https://tlgur.com/d/8BOj2r0G"
        loop
        autoPlay
        muted
        className="vid-mob"
      ></video>
      <div className="container">
        <div className="contact-form-inner">
          <div className="contact-form-side">
            <motion.h1
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.5,
                type: "spring",
              }}
            >
              contact us
            </motion.h1>
            <motion.p
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
                type: "spring",
              }}
            >
              get in touch with us for more information
            </motion.p>
            <motion.form
              variants={container}
              initial="hidden"
              animate="show"
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
            >
              <div className="contact-name">
                <motion.div className="contact-name-box" variants={item}>
                  <p className="input-name">first name</p>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </motion.div>
                <motion.div className="contact-name-box" variants={item}>
                  <p className="input-name">last name</p>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </motion.div>
              </div>
              <motion.div className="contact-email" variants={item}>
                <p className="input-name">email</p>
                <input
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>
              <motion.div className="contact-phone" variants={item}>
                <p className="input-name">number</p>
                <input
                  type="number"
                  placeholder="Enter Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </motion.div>
              <motion.div className="contact-message" variants={item}>
                <p className="input-name">message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </motion.div>
              <motion.p variants={item}>
                please if you are a registered user, please use the help panel
                available in the dashboard
              </motion.p>
              <motion.input
                type="submit"
                value="Send"
                className="btn-contact"
                variants={item}
              />
            </motion.form>
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
