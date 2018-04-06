import React, { Component } from "react";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import axios from "axios";

class ListGeoLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geolocations: []
    };
  }
  componentDidMount() {
    axios
      .get(" https://agile-tor-97521.herokuapp.com/geolocation/lists")
      .then(response => {
        let list = [];
        list=response.data.locations.map(res => {
            return {
              id: res._id,
              location: res.location,
              lat: res.lat,
              lng: res.lng,
              state: res.state
            };
        });
        this.setState({
          geolocations: list
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  handleBtnClick = () => {
    this.refs.nameCol.applyFilter(1);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <BootstrapTable
              data={this.state.geolocations}
              search
              searchPlaceholder="Search..."
            >
              <TableHeaderColumn
                dataField="location"
                isKey={true}
                // filter={{ type: "RegexFilter", delay: 10 }}
              >
                Location
              </TableHeaderColumn>
              <TableHeaderColumn dataField="lat">Lat</TableHeaderColumn>
              <TableHeaderColumn dataField="lng">Lng</TableHeaderColumn>
              <TableHeaderColumn dataField="state">State</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </div>
    );
  }
}

export default ListGeoLocation;
