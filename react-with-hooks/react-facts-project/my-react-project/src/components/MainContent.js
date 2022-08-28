import React from "react"

export default function MainContent(){
    return(
        <div className = "main">
            <h1>Fun Facts About React</h1>
            <ul className ="facts">
                <li>Maintained by Facebook</li>
                <li>Java Script based</li>
                <li>Has a strong community </li>
                <li>Adopted by major companies</li>
                <li>Declarative (removes heavy lifting for coders)</li>
            </ul>
        </div>
    )
}