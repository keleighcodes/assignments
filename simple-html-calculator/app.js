const add = document.add
const subtract = document.subtract 
const multiply = document.multiply

const newP = document.createElement("p")
const newP2 = document.createElement("p")
const newP3 = document.createElement("p")



addition.addEventListener("submit",function(event){
    event.preventDefault();
    const add1 = Number(addition.add1.value);
    const add2 = Number(addition.add2.value); 
    addition.add1.value = ""
    addition.add2.value = ""

    console.log(add1 + add2)

   
    newP.textContent = (add1 + add2)
    document.getElementById("add").append(newP)
    newP.style.textAlign = "center"

}
)

subtraction.addEventListener("submit",function(event){
    event.preventDefault();
    const sub1 = Number(subtraction.sub1.value);
    const sub2 = Number(subtraction.sub2.value);
    subtraction.sub1.value = ""
    subtraction.sub2.value = ""

    console.log(sub1 - sub2);

 
    newP2.textContent = (sub1 - sub2);
    document.getElementById("subtract").append(newP2)
    newP2.style.textAlign = "center"


}
)

multiplication.addEventListener("submit",function(event){
    event.preventDefault();
    const mult1 = Number(multiplication.mult1.value);
    const mult2 = Number(multiplication.mult2.value);
    multiplication.mult1.value = " "
    multiplication.mult2.value = " "

    console.log(mult1 * mult2)
    newP3.textContent = (mult1 * mult2);
    newP3.style.textAlign = "center"
    document.getElementById("multiply").append(newP3);

}
)

const clearBttn = document.getElementById("button")
clearBttn.addEventListener("click", function(){
    newP.remove()
    newP2.remove()
    newP3.remove()
})