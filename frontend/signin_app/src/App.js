import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Signin from './Components/signinComponent';
import Guests from './Components/guestsComponent';

class App extends Component {
  constructor(props) {
     super(props);
     this.addGuest = this.addGuest.bind(this);
  } 

  handleNameChange(e) {
   this.setState({name: e.target.value});
  }
  handleEmailChange(e) {
   this.setState({email: e.target.value});
  }
  handleCompanyChange(e) {
   this.setState({company: e.target.value});
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
      console.log(response);
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
            <div className="col-md-8 col-md-offset-2 signInForm">
              <form className="col-md-12" onSubmit={this.addGuest}>
                <input className="col-md-12" ref="name" type="text" placeholder="Name"/>
                <input className="col-md-12" ref="email" type="text" placeholder="Email"/>
                <input className="col-md-12" ref="company" type="text" placeholder="Company"/>
                <button className="btn col-md-2 col-md-offset-4 button" type="Submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-md-2 guestContainer">
            <div className="guestHeader col-md-12">
              <h1>Guest List</h1>
            </div>
            <div className="guestList col-md-12">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
