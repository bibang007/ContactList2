import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Contacts from './components/Contacts'
import Contact from './components/Contact'
import CreateContact from './components/CreateContact'
//import UpdateContact from './components/UpdateContact'

const url = 'http://localhost:4567/Contacts'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      Contacts: []
    }
    this.getContacts = this.getContacts.bind(this)
  }

  getContacts() {
    fetch (url)  
    .then(response => response.json())
    .then(data => {
      this.setState({ Contacts: data.Contacts })
    })
  }

  componentDidMount() {
    this.getContacts()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/Contacts' render={() => <Contacts Contacts = {this.state.Contacts}/>} />
          <Route path='/Contacts/:id' render={(props) => <Contact {...props} />} />
          <Route path='/create-Contact' render={() => <CreateContact />} />
        </Switch>
      </div>
    );
  }
}

export default App; 
