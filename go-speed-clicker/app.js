const button = document.getElementById("button");
const timer = document.getElementById("timer");
const main = document.getElementById("main");
button.addEventListener("click", buttonClick);
timer.addEventListener("click", timerClick);

let clicks = 0

function timerClick(){
    alert("5 Second Timer Starting!");

    setTimeout(function(){
        const newP = document.createElement("p")
        newP.textContent = clicks + " clicks! Try Again?"
        document.body.append(newP)
        localStorage.setItem("counter", clicks);
        console.log(clicks)
    }, 5000)

}

 function buttonClick(){
        clicks++
        //console.log(clicks)
    }






