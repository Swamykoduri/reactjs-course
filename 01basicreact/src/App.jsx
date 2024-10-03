import React from "react"
import Time from "./Time"

const person = {
  name: "Vishwas",
  age: 22,  
  city: 'Delhi'
}

function Innercomponent() {
  return <h1>Inner component {person.name }</h1>
}

function Outercomponent() {
  return <Innercomponent />
}

function App() {
  const fName = "Vishwas"
  const lName = "Kumar"
  return (
    <>
      <h1>Welcome to React Course</h1>
      <p>Hello, My name is {fName} {lName}</p>
      <p>My lucky number is {Math.floor(Math.random() * 10)}</p>
      <p>copy right @{new Date().getFullYear()}</p>
      <Outercomponent />
      <Time />
    </>
  )
}

export default App
