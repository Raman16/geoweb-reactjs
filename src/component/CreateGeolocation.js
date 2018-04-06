import React, { Component } from "react";
import Text from "./FormElements/Text";
import SubmitButton from "./FormElements/SubmitButton";
import axios from "axios";
import SearchGeoLocation from "./SearchGeoLocation";
import {NODE_URL} from './config';


class CreateGeolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      state: "",
      country: "",
      lat: "",
      lng: "",
      isLogged:""
    };
    this.getLocationDetails = this.getLocationDetails.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  
  getLocationDetails(details) {

     this.setState({
      location: details.location,
      state:  details.state,
      country: details.country,
      lat:  details.lat,
      lng:  details.lng,
     });


  }

  handleSubmit(event) {
    event.preventDefault();
    let data=this.state;
    axios.post(`${NODE_URL}/geolocation/add`,data)
    .then(function(response){
      alert("saved")
    }).catch((err)=>{
      console.log(`Failed to save ${err}`);
    });  
   
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-6">
              <SearchGeoLocation LocationDetails={this.getLocationDetails} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <h3>Add Form</h3>
          </div>
        </div>

        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <Text
                label="Location"
                name="location"
                value={this.state.location}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Text label="Latitude" name="latitude" value={this.state.lat} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Text label="Longitude" name="longitude" value={this.state.lng} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Text label="State" name="state" value={this.state.state} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Text label="Country" name="country" value={this.state.country} />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
            <SubmitButton name="save" label="Save" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateGeolocation;
