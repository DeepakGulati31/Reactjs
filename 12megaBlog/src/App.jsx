import './App.css'

function App() {
// console.log(process.env.REACT_APP_APPWRITE_URL)  //jyada tr process.env krtee h or ye create react app me hta vite ka alg h
console.log(import.meta.env.VITE_APPWRITE_URL) 

  return (
    <>
    <h1>Blog App With Appwrite</h1>
    </>
  )
}

export default App;
