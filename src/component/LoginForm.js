import React, { Component } from "react";
import Text from "./FormElements/Text";
import Password from "./FormElements/Password";
import axios from "axios";
import SubmitButton from "./FormElements/SubmitButton";
import {connect} from "react-redux";
import {setUserDetails} from "./../actions";
import {bindActionCreators} from 'redux';
import {NODE_URL} from './config';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({ [name]: value }, () => {});
  }
  handleSubmit(event) {
    event.preventDefault();

    var self=this;

    axios
      .post(`${NODE_URL}/users/login`, this.state)
      .then(function(response) {
          self.props.history.push('/add');
          self.props.setUserDetails(response);
      })
      .catch(err => {
        alert("Invalid User Credentials");
      });
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>Login Form</h3>
          </div>
        </div>

        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <Text
                label="Email Id"
                name="email"
                onChange={this.handleChange}
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
            <SubmitButton name="save" label="LoginIn" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
   
  }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
  return bindActionCreators({ setUserDetails }, dispatch);
}
export default connect (mapStateToProps,mapDispatchToProps)(LoginForm);
