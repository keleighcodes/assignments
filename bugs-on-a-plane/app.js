const form = document.airlineForm;
//var submit = document.getElementByID(submit);
//var query = document.querySelector;

form.addEventListener("submit",(event) => {
    event.preventDefault()

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const location = form.travelLocation.value;
    const diet = [];
    const checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
    
    for (var i = 0; i < checkedBoxes.length; i++) {
        diet.push(checkedBoxes[i].value);
    }
    console.log(checkedBoxes)

    /*if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }*/

    alert( firstName + " " +lastName  + " " + age + " " + gender + " "+ location + " " + diet + "\nAwesome, now if you die, it won't be an accident..");
})
