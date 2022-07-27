/*# GET request
    - A Get request as we recall is for 'getting' data
    - This can be requesting an entire webpage, or requesting data that we can manipulate for our webpage.
    - In the context of this course, we will always be using axios to get and manipulate data rather than receiving an entire webpage.
    - For these lessons we will be using the V school Todo API as it will allow us to practice all four of the HTTP methods we are learning.  The documentation can be found here:
        - https://coursework.vschool.io/v-schools-todo-api-documentation/*/


//1. GET request + add to DOM

axios.get("https://api.vschool.io/keleigh/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            h1.style.color = "lightgreen"
            h1.style.border = "solid salmon"
            h1.style.fontFamily = "avenir"
            document.body.appendChild(h1)
        } console.log(response.data)
    })
    .catch(error => console.log(error))

//POST Request - axios will parse the object to json
//submit POST request using user input
//syntax requires two args - url and new info
const todoForm = document.todoform
todoForm.style.border = "solid grey"
todoForm.style.fontFamily = "open sans"
todoForm.style.textAlign = "center"

todoForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const newTodo = {
            title: todoForm.title.value,
            description: todoForm.description.value,
            imgUrl: todoForm.imgURL.value,
        }

        axios.post("https://api.vschool.io/keleigh/todo", newTodo)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

    })

//DELETE REQUEST
//removing item that already exists in the database
//typically requires specific identifier

/*axios.delete("https://api.vschool.io/keleigh/todo/62e1af0818d1a05bceae5ffd")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))*/

    //example of DELETE usage
    /* const button = document.getElementById('delete-button')
        button.addEventListener("click", function(){
        axios.delete("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
})*/

//*PUT Request 
//updates an existing item in a database 
//method needs the id and the new info
const updates = {
    title: "Graduate from VSchool"
}
axios.put("https://api.vschool.io/keleigh/todo/62d9de9d18d1a05bceae5f6c", updates)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

//AUTO UPDATING THE WEBPAGE 
//GET THE TODOS FROM THE DATABASE
//LIST THE TODOS TO THE DOM
//FORM FOR THE POST REQUEST