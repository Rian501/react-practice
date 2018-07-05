import React, { Component } from 'react'
import EmployeeList from "./EmployeeList"  // Import EmployeeList component
import LocationList from './LocationList';


export default class Kennel extends Component {


  state = {
    employees: [
      { name: "Jessica Younker" },
      { name: "Jordan Nelson" },
      { name: "Zoe LeBlanc" },
      { name: "Blaise Roberts" }
    ],
    locations: [
      { name: "Nashville North", address: "500 Puppy Way" },
      { name: "Nashville South", address: "500 Old Doggo Way"  }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
      </React.Fragment>
    );
  }
}