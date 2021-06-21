import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class EditContact extends React.Component {
    constructor(props) {
        super(props)
        const { id, name, email, contactNumber } = props.location.state.contact;
        this.state = {
            id,
            name,
            email,
            contactNumber
        }
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.id === "" || this.state.name === "" || this.state.email === "" || this.state.contactNumber === "" ) {
        alert("All the fields are mandatory!");
        return;
        }

        this.props.updateContactHandler(this.state);
        this.setState({id: "", name: "", email: "" , contactNumber: "" });
        this.props.history.push("/");
        alert("Successfully Updated!! Click OK to see contact list.")
    };
    render() {
        return (
            <div className="ui main">
                <Header />
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    
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
                            required
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Contact Number</label>
                        <input
                            type="text"
                            name="contactNumber"
                            placeholder="Enter Phone number"
                            value={this.state.contactNumber}
                            required
                            onChange={(e) => this.setState({ contactNumber: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Update</button>
                    
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

export default EditContact;
