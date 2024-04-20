import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
let myObj={
  name:"deepak",
  age:19
}
let newArr=[1,3,4]

  return (
    <>
      <h1 className="bg-black  text-red-600 p-6 rounded-xl mb-4" >Tailwind test</h1>
      {/* <Card channel="deepakyt" obj={myObj} arr={newArr}/> */}
      <Card userName="deepakyt" btnText="click me"/>
      <Card userName="nitya" btnText="visit me" />
    </>
  )
}

export default App
