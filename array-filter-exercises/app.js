//1. 
function fiveAndGreaterOnly(arr) {
    let result = arr.filter(n => n >= 5)
    return result
  }
    // test
  //console.log(fiveAndGreaterOnly([3, 6, 8, 2]))

  //2. 
  function evensOnly(arr) {
    let evens = arr.filter( n => n % 2 === 0)
    return evens
  }
  // test
  //console.log(evensOnly([3, 6, 8, 2])); 

  //3. NEEDS REVIEW 

  function fiveCharactersOrFewerOnly(arr) {
    let splits = arr.map(n => n.split(""));
    if (splits.length < 5){
        
    }
  }
  // test
  //console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

  //. 4 

  function peopleWhoBelongToTheIlluminati(arr){
    let members = arr.filter(n => n.member === true)
    return members
  }
  // test
  /*console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));*/
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]


 //5. 
  function ofAge(arr){
    let old = arr.filter(n => n.age > 18);
    return old
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]

