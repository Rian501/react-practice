import React, { Component } from 'react'

export default class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        {
          this.props.employees.map(employee =>
            <div key={employee.id}>
              {employee.name}
            </div>
          )
        }
      </React.Fragment>
    )
  }
}