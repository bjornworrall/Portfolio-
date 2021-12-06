
import React from 'react'


export default function Card(props) {
    return (
        <section>
            <div className="img-container">
            <img src= {props.item.image} />
            </div>
            <div>
                <p className="country">{props.item.location}</p>
                <a href="{props.item.googleMapsUrl}" className="maps">View on google maps</a>
                <h1 className="title">{props.item.title}</h1>
                <p className="date"> <span>{props.item.startDate}</span> <span>{props.item.endDate}</span></p>
                <p className="descrption">{props.item.description}</p>
            </div>
        </section>
    )
}