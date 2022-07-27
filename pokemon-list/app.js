/*Write a function that gets the JSON and parses the JSON
 to create an array of objects*/

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const pokeData = JSON.parse(JSONdata)
        console.log(pokeData.objects)
        showPokemon(pokeData.objects[0].pokemon)
    }
}

function showPokemon(arr){
    for(let i = 0; i < arr.length; i++){
        const div = document.createElement('div')
        div.style.color = "red"
        div.style.fontFamily = "Luminari"
        div.style.fontSize = "larger"
        div.style.textAlign = "center"
        div.textContent = arr[i].name
        document.body.append(div)
    }
}





 