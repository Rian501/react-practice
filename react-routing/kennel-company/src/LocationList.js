import React, { Component } from 'react'


export default class LocationList extends Component {
state = {
  locations: [
    { id: 1, name: "Nashville North", address: "500 Puppy Way" },
    { id: 2, name: "Nashville South", address: "500 Old Doggo Way" }
  ]
}
  render() {
    return (
      <React.Fragment>
        {
          this.state.locations.map(loc =>
            <div key={loc.id}>
              <h3>{loc.name}</h3>
              <h4>{loc.address}</h4>
            </div>
          )
        }
      </React.Fragment>
    )
  }
}