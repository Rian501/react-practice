import React, { Component } from 'react'


export default class LocationList extends Component {

  render() {
    return (
      <React.Fragment>
        {
          this.props.locations.map(loc =>
            <div>
              <h3>{loc.name}</h3>
              <h4>{loc.address}</h4>
            </div>
          )
        }
      </React.Fragment>
    )
  }
}