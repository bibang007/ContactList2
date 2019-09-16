import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Contacts from './components/Contacts'
import Contact from './components/Contact'
import CreateContact from './components/CreateContact'


const url = 'http://localhost:4567/contacts'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      contacts: []
    }
    this.getContacts = this.getContacts.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  getContacts() {
    fetch (url)  
    .then(response => response.json())
    .then(data => {
      this.setState({ contacts: data.contacts })
    })
  }

  componentDidMount() {
    this.getContacts()
  }

  async handleDelete(e) {
    e.preDefault();
    console.log(e.target.id)
    await fetch(`http://localhost:4567/contacts/${e.target.id}`, {
    method: 'DELETE',
    }).then(response => {
      return response.json();
    })
    this.getContacts();
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/Contacts' render={() => <Contacts contacts = {this.state.contacts}  handleDelete={this.handleDelete}/>} />
          <Route path='/Contacts/:id' render={(props) => <Contact {...props} handleDelete={this.handleDelete}/>} />
          <Route path='/create-Contact' render={() => <CreateContact />} />
        </Switch>
      </div>
    );
  }
}

export default App; 
