import React, { Component } from 'react';


class UpdateContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            image: ""
        }
    }

    onFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        let data = {
            id: this.props.id,
            first_name: this.state.first_name || this.props.contact.first_name,
            last_name: this.state.last_name || this.props.contact.last_name,
            email: this.state.email || this.props.contact.email,
            phone: this.state.phone || this.props.contact.phone,
            image: this.state.image || this.props.contact.image
        }

        fetch('http://localhost:4567/contacts', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        })
    }

    render() {
        return (
            <div className="UpdateContactPage">
                <h2 className="title">Update Contact</h2>
                <form onSubmit={async event => {
                    await this.onFormSubmit(event);
                    this.props.getContact();
                    this.setState({
                        first_name: "",
                        last_name: "",
                        email: "",
                        phone: "",
                        image: ""
                    })
                }}>
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
                    <button className="button is-link">Update Contact</button>
                </div>
                </form>
            </div>
        )
    }
}

export default UpdateContact;