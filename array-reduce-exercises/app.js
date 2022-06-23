
//1.

function total(arr) {
    let result = arr.reduce((final, current) => final + current, 0);
    return result;
 }
 
 //console.log(total([1,2,3])); // 6

 //2. NEED HELP 

 function stringConcat(arr) {
    let newString = arr.reduce(function(final, current){
         arr.toString();
         return newString; 
    }, "")
   }
 
 //console.log(stringConcat([1,2,3])); // "123"

 //3. 

 function totalVotes(arr) {
   let allVoters = voters.reduce(function(final, voter){
      if(voter.voted){
         final++
      }
      return final
   }, 0)
   return allVoters
 }

   


var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
//console.log(totalVotes(voters)); // 7

//4. 


function shoppingSpree(arr) {
   let total = wishlist.reduce(function(final, current){
      final += current.price
      return final 
   }, 0)
   return total
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

//console.log(shoppingSpree(wishlist)); // 227005

//5. 

function flatten(arr) {
   let newArr = arr.reduce(function(final, current){
      return final.concat(current); 
   }, [])
   return newArr
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

//console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6. 

var voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Phil' , age: 21, voted: true},
   {name:'Ed' , age:55, voted:true},
   {name:'Tami' , age: 54, voted:true},
   {name: 'Mary', age: 31, voted: false},
   {name: 'Becky', age: 43, voted: false},
   {name: 'Joey', age: 41, voted: true},
   {name: 'Jeff', age: 30, voted: true},
   {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   let voterData = arr.reduce(function(final, voter){
      if (voter.age <= 25 && voter.voted){
         final.youngVoters++;
         final.youngVotes++;
      } else if (voter.age >= 26 && voter.age <= 35 && voter.voted){
         final.midVoters++;
         final.midVotes++;
      } else {
         final.oldVoters++;
         final.oldVotes++;
      }
      return final
   }, {youngVoters: 0, midVoters: 0, oldVoters: 0, youngVotes: 0, midVotes: 0, oldVotes: 0})
   return voterData
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
 numYoungPeople: 4,
 numMidVotesPeople: 3,
 numMidsPeople: 4,
 numOldVotesPeople: 3,
 numOldsPeople: 4
}
*/

