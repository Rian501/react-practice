import React, { Component } from 'react';
import './App.css';
import WeekDay from './WeekDay';
import APIman from './APIman';

class App extends Component {

  state = {
    weekArray: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: []
  }

  componentDidMount() {
    this.state.weekArray.forEach(day => {
      APIman.getAllPlansByDayOfWeek(day).then(results => {
        // console.log("RESULTS??", results, typeof (day))
        this.setState({ [day]: results })
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.weekArray.map((dayofWeek, i) => {
          return <WeekDay key={i} dayName={dayofWeek} plans={this.state[dayofWeek]} />
        })}
      </div>
    )
  }
}

export default App;
