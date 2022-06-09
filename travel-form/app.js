const form = document.myForm

form.addEventListener("submit", function(event){
    event.preventDefault();
    //alert("button works")

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const destination = form.destination.value
    const checkedDiet = []

    for (let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            checkedDiet.push(form.diet[i].value)
        }
    }
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDietary Restrictions: " + checkedDiet)
})



