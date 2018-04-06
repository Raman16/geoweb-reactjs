import React, { Component } from "react";
import axios from "axios";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import {NODE_URL} from './config';



class SearchGeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Bengalure, Karnataka",
      location: "",
      state: "",
      country: "",
      lat: "",
      lng: ""
    };
    this.onChange = address => this.setState({ address });
    this.handleSelect = this.handleSelect.bind(this);
    this.getSelectedLocationDetails = this.getSelectedLocationDetails.bind(
      this
    );
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true
    });

  
    geocodeByAddress(address).then(results => {
      this.setState({
        location: results[0].formatted_address,
        loading: true
      });
      this.getSelectedLocationDetails(results[0].formatted_address);
    });
  }

  getSelectedLocationDetails(address) {
    var encodeAddress = encodeURIComponent(address);
    let geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
    axios
      .get(geoCodeUrl)
      .then(response => {
        if (response.data.status === "ZERO_RESULTS") {
          throw new Error("Unable to find that address");
        }
        this.setState(
          {
            lat: response.data.results[0].geometry.location.lat,
            lng: response.data.results[0].geometry.location.lng,
            state: response.data.results[0].address_components[0].long_name,
            country: response.data.results[0].address_components[1].long_name
          },
          () => {
            this.props.LocationDetails(this.state); //sent to parent component
          }
        );
      })
      .catch(e => {
        if (e.code === "ENOTFOUND") {
          console.log("unable to connect server");
        } else {
          console.log(e.message);
        }
      });
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    const renderSuggestion = ({ formattedSuggestion }) => (
      <div>
        <strong>{formattedSuggestion.mainText}</strong>{" "}
        <small>{formattedSuggestion.secondaryText}</small>
      </div>
    );
    const handleEnter = address => {
      // geocodeByAddress(address).then(results => {
      //   console.log("results", results);
      // });
    };
    const shouldFetchSuggestions = ({ value }) => value.length > 2;
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-12">
            <label htmlFor="" className="col-sm-12 control-label">
             SEARCH LOCATION
            </label>
          </div>
          <div className="col-sm-12">
            <PlacesAutocomplete
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              onSelect={this.handleSelect}
              onEnterKeyDown={this.handleSelect}
              shouldFetchSuggestions={shouldFetchSuggestions}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchGeoLocation;
