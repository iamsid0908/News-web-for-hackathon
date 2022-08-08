import React from "react";
import "./Main.css";
import { useEffect, useState } from "react";
import Card from "./Card/Card";
import Upsc from "./UPSC/Upsc";

function Main(){
const[value,setValue]=useState([]);



useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=tesla&apiKey=0d262b30cb51476683a126a47c6758b7")
    .then(res=>res.json())
    .then((data)=>{
        console.log(data.articles);
        setValue(data.articles)
        })
},[])

return(
    <div className="main">
        {/* <div className="navbar">
        <ul>
            <li>HOME</li>
            <li>BITCOIN</li>
            <li>UPSC News</li>
        </ul>
        </div> */}
    {
    
        value.map(data=>(
            <>
            <Card data={data}/>
            </>
        ))
    }





    </div>
)
}
export default Main;