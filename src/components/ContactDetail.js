import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user1.jpg";
import Header from "./Header";

const ContactDetail = (props) => {
  const { id, name, email, contactNumber } = props.location.state.contact;
  return (
    <div className="main">
      <Header />
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user1" />
        </div>
        <div className="content">
        <div className="Header">{name}</div>
        <div className="description">User ID: {id}</div>
          <div className="description">Email: {email}</div>
          <div className="description">Contact Number: {contactNumber}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
