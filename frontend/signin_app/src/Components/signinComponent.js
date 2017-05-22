import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Signin extends Component {

    
  render() {
    return (
        <div className="col-md-8 col-md-offset-2 signInForm">
          <form className="col-md-12" onSubmit={() => this.addGuest}>
            <input className="col-md-12 name" type="text" placeholder="Name"/>
            <input className="col-md-12 email" type="text" placeholder="Email"/>
            <input className="col-md-12 company" type="text" placeholder="Company"/>
            <button className="btn col-md-2 col-md-offset-4 button" type="Submit">Submit</button>
          </form>
        </div>
    );
  }
}

export default Signin;