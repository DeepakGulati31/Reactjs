import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>custom app</h1>
        </div>
    )
}
// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }
const anotherElement=(
    <a href="https://google.com" target="_blank">visit</a>
)
const anotheruser="deepakkkkkkkkggggggg"

const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
