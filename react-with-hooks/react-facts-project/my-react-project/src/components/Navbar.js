import React from "react"

export default function Navbar (){
    return (
        <nav className = "navbar">
            <img src = {require("./logo192.png")} width = "60px"></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1 </h4>
        </nav>
    )
}