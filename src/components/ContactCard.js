import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const {id, name, email, contactNumber } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
          <div className="header"><h4>User ID:{id}</h4></div>
          <div><h4>Name: {name}</h4></div>
          <div><h4>Email:  {email}</h4></div>
          <div><h4>Contact Number:   {contactNumber}</h4></div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "23px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <button className="ui button yellow push" >
          Update
        </button>
      </Link>
      <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
        <button className="ui button green push">
          View
        </button>
      </Link>
    </div>
  );
};

export default ContactCard;
