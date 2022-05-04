/*preliminaries*/

var h1 = document.createElement("h1")

    h1.textContent = "Welcome, JavaScript made this!!"
    document.getElementById("header").appendChild(h1);
    h1.id = "welcome"

var welcome = document.getElementById("welcome")

    welcome.style.color = "green"
    welcome.style.marginLeft = "30%"
    welcome.style.marginRight = "30%"

var h2 = document.createElement("h2")

    h2.textContent = "Keleigh Wrote the Javascript"
    document.getElementById("header").appendChild(h2)
    h2.id = "subhead"

var welcome = document.getElementById("subhead")

    subhead.style.color = "green"
    subhead.style.marginLeft = "30%"
    subhead.style.marginRight = "30%"

/* bronze*/

var messages = document.getElementsByClassName("message")

    messages[0].textContent = "Hey!";
    messages[1].textContent = "Hey there? How has everything been?";
    messages[2].textContent = "Great, I just quit my toxic job.";
    messages[3].textContent = "Freedom is a great thing. I'm happy for you!"


let clearButton = document.getElementById("clear-button")

   clearButton.addEventListener("click", function(){
       console.log(messages)
       for (var i = 0; i < messages.length; i++)
       messages[i].textContent = ""
   })

    

/* silver */

var dropDown = document.getElementById("theme-drop-down")
var right = document.getElementsByClassName("right")
var left = document.getElementsByClassName("left")


dropDown.addEventListener("change", function(){
    console.log(right)
    for (var i = 0; i < right.length; i++){
        right[i].style.backgroundColor = "red"
    }
    for (var i = 0; i < left.length; i++){
        left[i].style.backgroundColor = "yellow"
    }
    
})

/* gold */


var newText = document.getElementById("input")
var sendBttn = document.getElementById("send")


sendBttn.addEventListener("click", function(){
    var newMsg = document.createElement("div")
    newMsg.textContent = newText.value
    messages.append(addMessage)
}
)


