import { useState } from 'react'     
import './App.css'

function App() {
  let [counter,setCounter] = useState(5);
  

  // const addValue = () => {
  //   setCounter(counter+1)       //this increments the value only by one. because useState send all the updates to the ui or variable in a batches form.
  //   setCounter(counter+1)       //  isme pura batch bnega 4 calls ka jo ki ek hi kaam ko repeat kr rhe
  //   setCounter(counter+1) 
  //   setCounter(counter+1) 
  // }
  const addValue = () => {
    setCounter(prevCounter=>prevCounter+1) 
    setCounter(prevCounter=>prevCounter+1) 
    setCounter(prevCounter=>prevCounter+1) 
    setCounter(prevCounter=>prevCounter+1) 
  }
  const removeValue=()=>{
    if(counter>1)
    setCounter(counter-1);
  else 
  console.log("-ve")
  }                         
  return (
    <>
      <h1>deepak agya h</h1>
      <h2>counter value:{counter}</h2>

      <button onClick={addValue}>add value</button><br>

      </br>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
