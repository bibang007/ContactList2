import React from 'react'

const Contacts = props => {
    return (
        props.contacts.map(contact => (
            <div className="contact" key={contact.id}>
                <div className="image-wrapper">
                    <img src={contact.image} alt='pic'/>
                </div>
                <div className="contact-details">
            <h3>First Name: {this.state.contact.first_name}</h3>
            <h3>Last Name: {this.state.contact.last_name}</h3> 
            <p>phone: {this.state.contact.phone}</p>
            <p>e-mail :{this.state.contact.email}</p>
            </div>
            <button className="button" id={contact.id} onClick={props.handleDelete}>Delete</button>   
            </div>
        )))
}
export default Contacts 