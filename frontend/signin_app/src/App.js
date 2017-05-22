import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Signin from './Components/signinComponent';
import Guests from './Components/guestsComponent';

class App extends Component {
  constructor(props) {
     super(props);
     this.addGuest = this.addGuest.bind(this);
     this.addNewGuest = this.addNewGuest.bind(this);
     this.state = {
      guests: []
    }
  }

  addNewGuest(guests){
    this.state.guests = [];
    guests.forEach(function(guest){
      this.state.guests.push(guest.name);
    })
    console.log(this.state.guests);
  }

  //https://demo-day-signin.herokuapp.com/
  addGuest(e) {
    e.preventDefault();
    e.stopPropagation();
    const formData = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      company: this.refs.company.value
    };
    console.log('-->', formData);
    axios.post('https://demo-day-signin.herokuapp.com/guests', {
      name: this.refs.name.value,
      email: this.refs.email.value,
      company: this.refs.company.value
    })
    .then(function (response) {
      var guests = response.data;
      //addNewGuest(guests);
      console.log(guests);
    })
    .catch(function(error){
      console.log(error);
    })
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.company.value = '';
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to</h2> 
          <div className="logo">
            <img src="http://cdn.shopify.com/s/files/1/0862/9580/t/14/assets/logo.png?7815179029571702990"/>
          </div>
          <h2>Demo Day!</h2>
        </div>
        <div className="AppBody col-md-12">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="intro">
              Please sign in below
            </h2>
           <Signin/>
          </div>
          <Guests/>
        </div>
      </div>
    );
  }
}

export default App;
