import React, { Component } from 'react';
import PlanCard from './PlanCard';
import "./App.css"

class WeekDay extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="oneDay">
        <h1>{this.props.dayName}</h1>
        {this.props.plans.map(plan => <PlanCard key={plan.id} plan={plan}
        />)
        }</div>
    );
  }
}

export default WeekDay;