
function doubleNumbers(arr){
   let doubledNumbers = arr.map(n => n * 2);
   return doubledNumbers
}

//console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr){
   let newStrings = arr.map(n => String(n));
   return newStrings
}
  
//console.log(stringItUp([2, 5, 100])); 

function capitalizeNames(arr){
    let newNames = arr.map(function(string){
        let stringResult = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
        return stringResult   
    })
    return newNames
}
  
//console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

function namesOnly(arr){
    let names = arr.map(arr => arr.name)
    return names
}
    
  
  /*console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));*/

  function makeStrings(arr){
    let  strings = arr.map(function(arr){
        if (arr.age >= 18){
            return (arr.name + " can go see the Matrix!")
        } else {
            return (arr.name + " can't go see the Matrix!")
        }
    })
    return strings
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  