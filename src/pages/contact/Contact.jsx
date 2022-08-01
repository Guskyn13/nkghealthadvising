import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhonelinkRing } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (firstName && lastName && email && phone && message) {
      const serviceId = "service_rfifvor";
      const templateId = "template_o76938o";
      const id = "HhxVKZ1JwP4EZDeDD";
      const templateParams = {
        firstName,
        lastName,
        email,
        phone,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, id)
        .then((response) => console.log("Success!", response))
        .then((error) => console.log("Error", error));

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <section>
        <div className="contactMainContainer">
          <div className="contactInfo">
            <div className="contactBackground">
              <h2>Contact Info</h2>
              <ul className="contactList">
                <li className="contactListLI">
                  <FaMapMarkedAlt className="contactListIcon" />
                  <span className="contactListAddress">Denver, CO</span>
                </li>

                <li className="contactListLI">
                  <AiOutlineMail className="contactListIcon" />
                  <span className="contactListEmail">
                    Nathangusky13@gmail.com
                  </span>
                </li>

                <li className="contactListLI">
                  <MdPhonelinkRing className="contactListIcon" />
                  <span className="contactListPhone">850.556.3452</span>
                </li>
              </ul>
            </div>

            <ul className="contactLinks">
              <li>
                <a href="https://www.linkedin.com/in/nathankgusky/">
                  <FaLinkedin className="contactLinkIcons" />
                </a>
              </li>
            </ul>
          </div>

          <div className="contactForm">
            <h2>Send a Message</h2>
            <div className="contactFormBox">
              <div className="contactInputBox w50">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <span>First Name</span>
              </div>
              <div className="contactInputBox w50">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <span>Last Name</span>
              </div>
              <div className="contactInputBox w50">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span>Email</span>
              </div>
              <div className="contactInputBox w50">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <span>Mobile Number</span>
              </div>
              <div className="contactInputBox w100">
                <textarea
                  name=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <span>Write your message here...</span>
              </div>
              <div className="contactInputBox">
                <button onClick={submit} className="contactButton">
                  Send
                </button>
                <div className="contactEmailSent">
                  <span className={emailSent ? "visible" : "notVisible"}>
                    Thank you for your message, we will be in touch shourtly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
