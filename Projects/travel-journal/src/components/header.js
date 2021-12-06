

import React from 'react'
import image from "../images/earth-icon.png"

export default function  Header() {
    return (
        <header>
            <img src={image} className="header-image" />
            <p>My travel journal</p>
        </header>
    )
}