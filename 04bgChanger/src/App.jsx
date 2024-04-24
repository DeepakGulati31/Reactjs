import { useState } from 'react'


function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div className="h-screen w-full  duration-300" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3  shadow-lg  bg-gray-600 px-3 py-2 rounded-2xl'>
            <button onClick={()=>{setColor("violet")}} className=' outline-none px-4 py-1 rounded-full text-violet-900 shadow-lg' style={{ backgroundColor: "Violet" }}>Violet</button>
            <button onClick={()=>{setColor("indigo")}} className=' outline-none px-4 py-1 rounded-full text-indigo-400 shadow-lg' style={{ backgroundColor: "indigo" }}>Indigo</button>
            <button onClick={()=>{setColor("blue")}} className=' outline-none px-4 py-1 rounded-full text-blue-300 shadow-lg' style={{ backgroundColor: "Blue" }}>Blue</button>
            <button onClick={()=>{setColor("green")}} className=' outline-none px-4 py-1 rounded-full  text-green-500 shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={()=>{setColor("yellow")}} className=' outline-none px-4 py-1 rounded-full text-yellow-700 shadow-lg' style={{ backgroundColor: "Yellow" }}>Yellow</button>
            <button onClick={()=>{setColor("orange")}} className=' outline-none px-4 py-1 rounded-full text-orange-700 shadow-lg' style={{ backgroundColor: "Orange" }}>Orange</button>
            <button onClick={()=>{setColor("red")}} className=' outline-none px-4 py-1 rounded-full text-red-300 shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

//refresh krenge to vps pink ajaega kyuki useState m to initially pink h to reload p vps start hga aur pink laadega
//onclick method ko function chaiye
