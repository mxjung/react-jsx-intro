function Tweet({username, name, data, message}) {
  
  const styling ={
    color: 'yellow',
    backgroundColor: 'red',
    padding: '1rem',
    margin: '1rem'
  }
  
  return (
    <div style={styling}>
      <h1>Username: {username}</h1>
      <h3>By: {name} On: {data}</h3>
      <p>{message}</p>
    </div>
  )
}