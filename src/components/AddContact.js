import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class AddContact extends React.Component {
  state = {
    id: "",
    name: "",
    email: "",
    contactNumber: "",
  };

  

  add = (e) => {
    e.preventDefault();
    if (this.state.id === "" || this.state.name === "" || this.state.email === "" || this.state.contactNumber === "") {
      alert("All the fields are mandatory!");
      return;
    }
    
    this.props.addContactHandler(this.state);
    this.setState({id: "", name: "", email: "" , contactNumber: "" });
    this.props.history.push("/");
    alert("Contact added successfully!!  Click OK to see contact list.");
  };
  render() {
    return (
      <div className="ui main">
        <Header />
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>User ID</label>
            <input
              type="number"
              name="id"
              placeholder="Enter ID number"
              value={this.state.id}
              required
              onChange={(e) => this.setState({ id: e.target.value })}
            /> 
          </div>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              required
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email@email.com"
              value={this.state.email}
              required="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Enter Phone Number"
              value={this.state.contactNumber}
              required
              onChange={(e) => this.setState({ contactNumber: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
          
          <Link to="/">
            <button className="ui button red center" style={{ marginLeft: "7px", marginTop: "7px" }}>
              Cancel
            </button>
          </Link>
        </form>
       
      </div>
    );
  }
}

export default AddContact;
