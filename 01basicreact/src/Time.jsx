import React from 'react' 


function Tick() {
  const element = (
    <>
      <h1>Hello, World</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </>
  )
  return element;
}

function Heading() {
  const date = new Date().getHours();
  if (date < 12)
    return <h1>Good Morning</h1>
  else if (date < 18)
    return <h1>Good Afternoon</h1>
  else if (date < 21)
    return <h1>Good Evening</h1>
  else
    return <h1>Good Night</h1>
}

function Time() {
  return (
    <>
      <h1>Time component</h1>
      <Tick />
      <Heading />
    </>
  )
}

export default Time;