import React from 'react'

const Contacts = props => {

    return (
        
        props.contacts.map(contact => (
           
            <div className="contact" key={contact.id}>
                <div className="wrapper">
                    <img src={contact.image} alt='pic'/>
                </div>
                <div className="contact-details">
            <h3>First Name: {contact.first_name}</h3>
            <h3>Last Name: {contact.last_name}</h3> 
            <p>phone: {contact.phone}</p>
            <p>e-mail :{contact.email}</p>
            </div>
            <button className="button" id={contact.id} onClick={props.handleDelete}>Delete</button>   
            </div>
        )))
}
export default Contacts 