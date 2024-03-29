const list = document.getElementById("list")
list.style.listStyle = "lower-roman"
const form = document.todoform

function getData(){
    axios.get("https://api.vschool.io/keleigh/todo/")
    .then(response => listData(response.data))
    .catch(error => console.log(error))
}
///1. GET request + add to DOM
function listData(responseData){
   
        //const responseData = response.data
        for(let i = 0; i < responseData.length; i++){
            const li = document.createElement('li')
            li.textContent = responseData[i].title
            li.style.color = "darkgreen"
            li.style.border = "solid salmon"
            li.style.borderRadius = "6px"
            li.style.marginBottom = "3px"
            li.style.fontFamily = "avenir"
            li.style.backgroundColor = "darkseagreen"
            li.style.padding = "10px"
            list.appendChild(li)

            

            const newSpan = document.createElement('span')
            newSpan.textContent = ": " + responseData[i].description
            newSpan.style.margin = "4px"
            li.appendChild(newSpan)
            
            const img = document.createElement('img')
            img.src = responseData[i].imgURL
            li.appendChild(img)

            const completed = document.createElement('button')
            completed.textContent = "Mark Complete"
            completed.style.margin = "10px"
            li.appendChild(completed)

            completed.addEventListener("click", function(){
                const update = { completed : true }
                axios.put("https://api.vschool.io/keleigh/todo/"+responseData[i]._id, update)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
            })

            li.addEventListener("click", function(){
                li.style.textDecoration = "line-through"
             })
            

             li.addEventListener("dblclick", function(){
                list.removeChild(li)
                    axios.delete("https://api.vschool.io/keleigh/todo/"+responseData[i]._id)
                    .then(response=> console.log(response.data))
                    .catch(error => console.log(error))
            })

        }
         console.log(responseData)
    }


///2. POST Request - axios will parse the object to json/ add new data to API
form.addEventListener("submit", (event) => {
        event.preventDefault()

        const newTodo = {
            title: form.title.value,
            description: form.description.value,
            price: form.price.value,
            imgUrl: form.imgURL.value,
        }

        axios.post("https://api.vschool.io/keleigh/todo/", newTodo)
            .then(response => getData())
            .catch(error => console.log(error))

            form.title.value = " "
            form.description.value = " "
            form.imgURL.value = " "

    })


    getData()





