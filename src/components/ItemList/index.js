import React from "react"
import "./styles.css"

export const ItemList = ({title, description, html_url}) => {
    const handleClick = () => {
        window.open(html_url, '_blank')
    }

    return (
        <div className="item-list" onClick={handleClick}>
            <h3>{title}</h3>
            <p>{description}</p>
            <hr/>
        </div>
    ) 
    
}

