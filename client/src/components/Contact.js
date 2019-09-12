import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Contact: ''
        }
        this.getContact = this.getContact.bind(this)
    }

    getContact() {
        fetch(`http://localhost:4567/Contacts/${this.props.match.params.id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data.contact)
            this.setState({ Contact: data.contact })
        })
    }

    componentDidMount() {
        this.getContact()
    }

    render() {
        return (
            <div className="contact">
                <div className="image-wrapper">
                    <img src={this.state.contact.image} alt='pic'/>
                </div>

                <div className="contact-details">
            <h3>First Name: {this.state.contact.first_name}</h3>
            <h3>Last Name: {this.state.contact.last_name}</h3> 
            <p>phone: {this.state.contact.phone}</p>
            <p>e-mail :{this.state.contact.email}</p>
            </div>
            
            </div>
        )}
}