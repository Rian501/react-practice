import React, { Component } from 'react'
import EmployeeList from "./EmployeeList"  // Import EmployeeList component
import LocationList from './LocationList';
import AnimalList from './AnimalList';


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
    ],
    animals: [
      { name: "Bogie", type: "dog" },
      { name: "Sauron", type: "cat" },
      { name: "Ordie", type: "cat" },
      { name: "Jack-Jack", type: "dog" },
      { name: "Petra", type: "dog" },
      { name: "Petra", type: "dog" },
    ]
  }

  render() {
    return (
      <React.Fragment>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList puppers={this.state.animals} />
      </React.Fragment>
    );
  }
}