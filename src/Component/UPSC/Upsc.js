import React from 'react'
import { useEffect, useState } from "react";
import Card from '../Card/Card';
import './Upsc.css';

function Upsc() {
    const[valueup,setValueup]=useState([]);

    useEffect(()=>{
        fetch("https://newsapi.org/v2/everything?q=upsc&apiKey=0d262b30cb51476683a126a47c6758b7")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data.articles);
            setValueup(data.articles)
            })
    },[])
  return (
    <div>
       {
    
    valueup.map(data=>(
        <>
        
        <div className="list">
            <card>
            <div className="card-list">
            <img src={data.urlToImage} alt="" width="250" height="250"></img>
                <h3>{data?data.author:" "}</h3>
                <h3>{data.title}</h3>
                {/* <h3>{data.description}</h3> */}
                
                <a className='.GFG' href={data.url}>
        <span className='read'>Read more</span>
    </a>
                

            </div>
            </card>
        </div>
        </>
    ))
}

    </div>
  )
}

export default Upsc
