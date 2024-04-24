import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/DeepakGulati31')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },)

    return (
        <div className='text-center m-5 bg-gray-700 text-white p-4 text-3xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader=async()=>{
   const response= await fetch("https://api.github.com/users/DeepakGulati31")
   return response.json()
}