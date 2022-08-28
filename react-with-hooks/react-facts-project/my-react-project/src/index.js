import React from "react" 
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar.js"
import MainContent from "./components/MainContent.js"


function Page (){
    return(
    <div className = "page">
        <Navbar />
        <MainContent />  
    </div>  
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))