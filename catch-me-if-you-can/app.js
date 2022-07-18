//1a.

function sum(x, y){
    try {
        if(isNaN(x) || isNaN(y)){
            throw "One of your values is not a number."
        }
    }
    catch(err) {
        console.log(err)
    }
    finally {
        return x + y;
  }
}

//console.log(sum(2,4))

//1b. 


/*try {
    console.log(sum("1", "2"));
    throw "Integer required."
    }
catch(err){
    console.log(err)
} */

//2a.

var user = {
            username: "Solange",
            password: "Knowles"
        }
        
function login(username, password){
    try{
        if((username !== user.username) || (password !== user.password)){
            throw "username or password is incorrect"
        } else {
            console.log("login successful!")
        }
    }
    catch(err){
        console.log(err)
    }
   
}

//console.log(login("Solange", "Knowles"))

//2b.

try {
    login("Solange", "Knowles")
}
catch (err){
    console.log(err)
}



