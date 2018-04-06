import React, { Component } from "react";
import Text from "./FormElements/Text";
import SubmitButton from "./FormElements/SubmitButton";
import axios from "axios";

import Password from "./FormElements/Password";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value }, () => {
      
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/users/register',this.state)
    .then(function(response){
      alert("Registration Success");
    }).catch((err)=>{
      alert("Failed to Register");
    });  
  
  }
 
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>Registration</h3>
          </div>
        </div>

        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <Text
                label="Name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Text
                label="Email Id"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Password
                label="Password"
                name="password"
                onChange={this.handleChange}
               
              />
            </div>
          </div>
        

          <div className="row">
            <div className="col-sm-6">
              <SubmitButton name="save" label="Register" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
