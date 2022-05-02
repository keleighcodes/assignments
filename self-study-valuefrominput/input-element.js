var button = document.getElementById("button")
var myname = document.getElementById("name")

button.addEventListener("click", buttonClick)

function buttonClick(){
    var newP = document.createElement("p")
    newP.textContent = myname.value
    document.body.append(newP)
    }





