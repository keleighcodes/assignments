
var header = document.getElementById("header")

    header.style.backgroundColor = "pink";
    header.style.fontSize = "60px";
    header.style.display = "inlineBlock"




var square = document.getElementById("square")

square.addEventListener("mouseover",function(){
    square.style.backgroundColor = "blue"
})

square.addEventListener("mousedown",function(){
    square.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function (){
    square.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function (){
    square.style.backgroundColor = "green"
})

square.addEventListener("mouseout", function (){
    square.style.backgroundColor = "orange"
})


window.addEventListener("keydown", function (event) {
    var unicode = event.key
    if (unicode === "b") {
            square.style.backgroundColor = "blue"
    }   else if (unicode === "r") {
            square.style.backgroundColor = "red"
    }   else if (unicode === "y") {
            square.style.backgroundColor = "yellow"
    }   else if (unicode === "g") {
            square.style.backgroundColor = "green"
    }   else if (unicode === "o") {
            square.style.backgroundColor = "orange"
    }
    
}
)

