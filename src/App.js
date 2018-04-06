import React, { Component } from "react";

import "./App.css";
import CreateGeolocation from "./component/CreateGeolocation";
import RegisterForm from "./component/RegisterForm";
import LoginForm from "./component/LoginForm";
import ListGeoLocation from "./component/ListGeoLocation";
import {connect} from "react-redux";
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import _ from "lodash";
import {bindActionCreators} from 'redux';
import {logout} from "./actions";
import Button from "./component/FormElements/Button";


class App extends Component {
 
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }


  logout(e){
    //self.props.history.push("/login");
    this.props.logout();
  }

  render() {
  
    return (
      <div className="App">
       <Router>
          <div>
            <div className="collapse navbar-collapse" id="app-navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
              <li>
                {this.props.isLogged !== "true" && (
                <Link to="/login">Login</Link>
                )}  </li>
              
               <li>
                {this.props.isLogged !== "true" && (
                <Link to="/register">Register</Link>
                )}
               </li>
              
                <li>
                  <Link to="/add">Add Geolocation</Link>
                </li>
                <li>
                  <Link to="/list">Geolocation List</Link>
                </li>
                <li>
                {this.props.isLogged === "true" && (    <Link to="/login" onClick={this.logout}>logout</Link>)}
                </li>
               
              </ul>
            </div>
       
            <Switch>
            <Route exact path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/add" component={CreateGeolocation} />
              <Route path="/list" component={ListGeoLocation} />
            </Switch>
          </div>
          </Router> 
      
      </div>
    );
  }
}

const mapStateToProps=(state)=>{

  let isLogged='false;'
  if(!_.isEmpty(state.user)){
    isLogged='true';
  }
  return {
    user: state.user,
    isLogged:isLogged
  }
}


const mapDispatchToProps=(dispatch,ownProps)=>{
  return bindActionCreators({ logout }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
