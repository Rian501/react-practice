// Create a new state array in the Kennel component named animals.
// Create a AnimalList component for displaying animals.
// Update Kennel to pass its animals state to AnimalList and use the appropriate key on this.props to display all animal names.


import React, { Component } from 'react'


export default class AnimalList extends Component {
  
  findOwner(animalId) {
    let ownersName = ''; // a forEach does not return anything, so that won't work unless you set a var and reset it
    this.props.owners.forEach((owner) => {
         this.props.joins.forEach((relationship) => {
          if (relationship.petId === animalId && relationship.ownerId === owner.id) {
            console.log(relationship,owner.name)
            ownersName = owner.name;
          }
        })
      })
    return ownersName;
  }

  render() {
    
    return (
      <React.Fragment>
        {
          this.props.puppers.map(animal =>
            <div key={animal.id}>
              <h3>{animal.name}</h3>
              <h4>{animal.type}</h4>
              <p>{this.findOwner(animal.id)}</p>
            </div>
          )
        }
      </React.Fragment>
    )
  }
}