import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class CreateContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            image: ""
        }
    }

    onFormChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = e => {
        e.preventDefault();
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            image: this.state.image

        }
        fetch('http://localhost:4567/contacts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        })
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            image: ""
        })
        window.location.reload()
        this.props.history.push('/contacts')
    }

    render() {
        return(
            <div className="createContactPage">
            <h2 className="title">New Contact</h2>
            <form onSubmit={ this.onFormSubmit } id="contactForm">
            <div className="field">
                <label className="label" htmlFor="name">First Name: 
                </label>
                <div className="control">
                    <input
                    onChange={this.onFormChange}
                    className="input"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={this.state.first_name}
                    />
                </div>
                </div>
                <div className="field">
                <label className="label2" htmlFor="name">Last Name: 
                </label>
                <div className="control">
                    <input
                    onChange={this.onFormChange}
                    className="input"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    />
                </div>
                </div>
                <div className="field">
                <label className="label" htmlFor="name">Phone: 
                </label>
                <div className="control">
                    <input
                    onChange={this.onFormChange}
                    className="input"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={this.state.phone}
                    />
                </div>
                </div>
                <div className="field">
                <label className="label" htmlFor="name">Email: 
                </label>
                <div className="control">
                    <input
                    onChange={this.onFormChange}
                    className="input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    />
                </div>
                </div>
                <div className="field">
                <label className="label" htmlFor="name">Contact Image: 
                </label>
                <div className="control">
                    <input
                    onChange={this.onFormChange}
                    className="input"
                    type="text"
                    name="image"
                    placeholder="Contact Image"
                    value={this.state.image}
                    />
                </div>
                </div>
                <div className="control">
                    <button type="submit" className="button" 
                    >Add Contact</button>
                </div>
            </form>
            </div>
        )
    }
}

export default withRouter(CreateContact)