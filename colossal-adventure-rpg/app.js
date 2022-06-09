const readline = require("readline-sync");
const userName = readline.question('Hello traveler! What is your name?');
console.log("\nGreetings, " + userName + ".");
console.log(" You are about to embark on a grand adventure: life! But first, you will have to battle fearsome enemies. \nDon't despair! With a little courage and reasoning, you can survive these attacks, collect affirmations, and reach your goals.");
     
let hp = 100 
let enemyHp = 50
let inventory = {affirmations: 0}
let playerStats = "\n\nName: " + userName + "\nHealth:" + hp + "\nInventory:" + "You have collected " + inventory.affirmations + " affirmations."
const enemies = ["Debt", "Anxiety", "Stress"]
let randomEnemy = () => enemies[Math.floor(Math.random() * enemies.length)];



function walk(){
    let willWalk = readline.keyIn("\nWhat will you do?\n\n[w]Walk [p]Player Info [q]Quit\n")
    let chanceOfAttack = Math.floor(Math.random() * 100)
    
    if (willWalk === "w" && hp >= 0 && inventory.affirmations < 3){
        
        if (chanceOfAttack >= 33) {
            walk()
        } else {
            const enemy = randomEnemy()
            fight(enemy, 50)
        }
    } else if (willWalk === "p"){
        console.log(playerStats)
        walk()
    } else if (willWalk === "q"){
        console.log("\nGame Over")
    } else if (inventory.affirmations === 3){
        console.log("Congratulations! You have used the power of positive affirmations to reach your goals.")
    }

}


function fight(enemy, enemyHp){

    console.log( "\n" + enemy + " is in your way! What will you do?")
      
    
    while (hp > 0 && enemyHp > 0){
        let damageToEnemy = Math.floor(Math.random() * 50)
        let damageToUser = Math.floor(Math.random() * 20)
        let receivedAffirmation = 1
        let chanceOfEscape = randomGenerator();
        function randomGenerator() {
            return Math.floor(Math.random() * 100);
        }

    let willFight = readline.keyIn("\n[f]Fight \n[r]Run\n", {limit: "fr"})

    if(willFight === "f") {
        hp = hp - damageToUser;
        enemyHp = enemyHp - damageToEnemy;
        console.log(userName + ", your HP is now at " + hp)
        console.log("The enemy's HP is now " + enemyHp)
        console.log("You square up with " + enemy + ".")
            
        if(enemyHp <= 0){
        inventory.affirmations = inventory.affirmations + receivedAffirmation;
        console.log("You defeated " + enemy + " and gained a positive affirmation.")
        console.log("\nInventory:" + inventory.affirmations)
        walk()

        } else if (hp <= 0) {
            console.log("\n" + enemy + " has ended your journey!")

        }
    } else if (willFight === "r"){
        chanceOfEscape = randomGenerator();
        if (chanceOfEscape >= 50){
            console.log("Congratulations! You escaped and earned a positive affirmation.")
            inventory.affirmations = inventory.affirmations + receivedAffirmation;
            break;
        } else if (chanceOfEscape < 50){
            console.log("\nNice try, but we can't outrun our problems that easily.")
            hp = hp - damageToUser
            console.log("While trying to run, " + enemy + " attacked you.")
            fight(enemy, enemyHp)
            console.log(playerStats)

        }
    }
}


        
    }

    

walk()













/*create a while loop that checks while hp is greater than 0 do 
execute your walk function, inside your walk function you can 
create a chance of being attacked variable and if are attacked 
then you could execute a fight function */