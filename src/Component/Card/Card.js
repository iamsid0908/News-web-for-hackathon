import React from 'react'
import "./Card.css"

function Card({data ,dataupsc}) {
  return (
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
    
  )
}

export default Card
