import React, { Component } from 'react'
import EmployeeList from "./EmployeeList"  // Import EmployeeList component
import LocationList from './LocationList';
import AnimalList from './AnimalList';


export default class Kennel extends Component {


  state = {
    employees: [
      { id: 1, name: "Jessica Younker" },
      { id: 2, name: "Jordan Nelson" },
      { id: 3, name: "Zoe LeBlanc" },
      { id: 4, name: "Blaise Roberts" }
    ],
    locations: [
      { id: 1, name: "Nashville North", address: "500 Puppy Way" },
      { id: 2, name: "Nashville South", address: "500 Old Doggo Way"  }
    ],
    animals: [
      { id: 1, name: "Bogie", type: "dog" },
      { id: 2, name: "Sauron", type: "cat" },
      { id: 3, name: "Ordie", type: "cat" },
      { id: 4, name: "Jack-Jack", type: "dog" },
      { id: 5, name: "Petra", type: "dog" },
      { id: 6, name: "Murphs", type: "dog" },
    ],
    owners: [
      { id: 1, name: "Ryan Tanay" },
      { id: 2, name: "Emma Beaton" },
      { id: 3, name: "Dani Adkins" },
      { id: 4, name: "Adam Oswalt" },
      { id: 5, name: "Fletcher Bangs" },
      { id: 6, name: "Angela Lee" }
    ],
    petOwnerJoin: [
      { id: 1, ownerId: 4, petId: 1},
      { id: 2, ownerId: 2, petId: 6},
      { id: 3, ownerId: 3, petId: 3},
      { id: 4, ownerId: 3, petId: 5},
    ]
  }

  render() {
    return (
      <React.Fragment>
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
        <AnimalList puppers={this.state.animals} owners={this.state.owners} joins={this.state.petOwnerJoin} />
      </React.Fragment>
    );
  }
}