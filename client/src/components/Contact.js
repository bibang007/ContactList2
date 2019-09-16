import React, { Component } from 'react'
import UpdateContact from './UpdateContact'
// import { withRouter } from 'react-router'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: ''
        }
        this.getContact = this.getContact.bind(this)
    }

    getContact() {
        fetch(`http://localhost:4567/contacts/${this.props.match.params.id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data.contact)
            this.setState({ contact: data.contact })
        })
    }

    componentDidMount() {
        this.getContact()
    }

    render() {
        return (
            <div className="contact">
                <div className="image-wrapper">
                    <img src={this.state.contact.image}/>
                </div>

                <div className="contact-details">
            <h3>First Name: {this.state.contact.first_name}</h3>
            <h3>Last Name: {this.state.contact.last_name}</h3> 
            <p>phone: {this.state.contact.phone}</p>
            <p>e-mail :{this.state.contact.email}</p>
            </div>
            <button 
                    className="button" 
                    id={this.state.contact.id} 
                    onClick={
                        (e) => { this.props.handleDelete(e) 
                        this.props.history.push('/contacts')}
                    }
                        >
                    Delete
                </button>
                <UpdateContact id={this.props.match.params.id} contact={this.state.contact} getContact={this.getContact} />
            </div>
        )}
}