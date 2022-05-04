const form = document.addItem 
const list =  document.getElementById("list")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const title = form.title.value
    const newItem = document.createElement('li')
    form.title.value = " "
    newItem.textContent = title
    document.getElementsByTagName("ul")[0].append(newItem)

    const clearBtn = document.createElement("button")
    clearBtn.textContent = "X"
    newItem.append(clearBtn)
    clearBtn.addEventListener("click", () =>{
        newItem.remove('li')
    } )


    const editBtn = document.createElement("button")
    editBtn.textContent = "edit"
    newItem.append(editBtn)

    editBtn.addEventListener("click", () =>{
        var changeItem = document.createElement("input")
        newItem.append(changeItem)
        var ok = document.createElement("button")
        ok.textContent = "OK"
        newItem.append(ok)

        let editItem = changeItem.textContent

        ok.addEventListener("click", () =>{
           alert("Changes can't be made at this time. Sorry!")
        })

    })


    

}
)