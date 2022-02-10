import React from "react";
import image from "../assests/attachment_114907527.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: ` url(${image})` }}
      ></div>
      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form id="contact-form" method="post">
          <label htmlFor="name">full name'</label>
          <input name="name" type="text" placeholder="ENTER YOUR NAME" />
          <label htmlFor="email">email'</label>
          <input name="name" type="text" placeholder="ENTER YOUR @EMAIL" />
          <label htmlFor="MESSAGE">MESSAGE'</label>
          <textarea name="message" placeholder="ENTER YOUR MESSAGE" ROWS="7" />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
