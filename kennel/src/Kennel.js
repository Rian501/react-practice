import React, { Component } from 'react'
import EmployeeList from "./EmployeeList"  // Import EmployeeList component
import LocationList from './LocationList';


export default class Kennel extends Component {
  render() {
    return (
      <div>
        <LocationList />
        <EmployeeList />
      </div>
    );
  }
}