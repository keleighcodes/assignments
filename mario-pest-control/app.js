const form = document.form
const main = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault();
    //alert("Button Works")

    
    const name = (form.name.value);
    const goombas = (Number(form.goombas.value) * 5);
    const bobombs = (Number(form.bobombs.value) * 7);
    const cheepcheeps = (Number(form.cheepcheeps.value) * 11);

    name.textContent = ""
    goombas.textContent = ""
    bobombs.textContent = ""
    cheepcheeps.textContent = ""

    //alert(name + goombas + bobombs + cheepcheeps)

    let customer = document.createElement("h2");
    customer.textContent = ("Customer Name: " + name + " " + "Total: $" + (goombas + bobombs + cheepcheeps));
    customer.style.fontFamily = ("'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif");
    customer.style.display = "span";
    customer.style.backgroundColor = "red";
    main.append(customer);

    
})