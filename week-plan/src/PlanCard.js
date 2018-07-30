import React, { Component } from 'react';
import "./App.css"


class PlanCard extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="onePlan">
        <p>We are going to {this.props.plan.thing} </p>
        <h1>At: {this.props.plan.place}</h1>
      </div>
    );
  }
}

export default PlanCard;