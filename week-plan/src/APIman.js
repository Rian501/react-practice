const APIman = Object.create({}, {
  getAllPlansByDayOfWeek: {
    value: (dayOfWeek) => {
      return fetch(`http://localhost:5002/plans?day=${dayOfWeek}`)
        .then(e => e.json())
    }
  }


})

export default APIman;