import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*~`-_+><{}[]"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);   //password dege instead  of setpassword to infinite loop bnjauega vo

const copiedPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-900 bg-opacity-50">
        <h1 className="text-4xl pt-5">
          {" "}
          <span className="text-4xl underline bg-gradient-to-r from-sky-400 to-cyan-500 bg-clip-text text-transparent ">
            Random
          </span>{" "}
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 py-4">
          <input
            className="outline-none w-full py-4 px-4 rounded-md"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copiedPasswordToClipboard} className="outline-none bg-gray-800 px-4 py-1 shrink-0 rounded-md">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-lg">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1 px-3">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="text-lg">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 px-3">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label className="text-lg">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
