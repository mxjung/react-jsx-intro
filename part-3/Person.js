function Person({name, age, hobbies}) {
  return (
  <div>
    {name.length > 8 ? <h3>{name.slice(0,6)}</h3> : <h3>{name}</h3>}
    <p>Learn some information about this person</p>
    {age > 18 ? <h3>please go vote!</h3> : <h3>You must be 18</h3>}

    <h3>Hobbies</h3>
    <ul>
      {/* why can't we use for loop, what about for loops (look at solution) */}
      {hobbies.map(h => <li>{h}</li>)}
    </ul>
  </div>
  )
}


akassian