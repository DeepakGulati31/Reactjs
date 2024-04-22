import { useEffect,useState } from "react";

function useCurrency(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    },[currency])     
    return data;                  
    
    //useEffect se automatically fetch call hojayega and no need to create the function inside the given fucntion
}

export default useCurrency;