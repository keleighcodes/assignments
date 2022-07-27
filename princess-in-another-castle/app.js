

class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = 0;
        this.status = status;
        this.hasStar = hasStar;
    }

    setName(){
        let playerName = Math.floor(Math.random() * 2)
        if(playerName === 1){
            this.name = "Mario"
        } else if (playerName === 2){
            this.name = "Luigi"
        }
        return this.name
    }

    gotHit(){
        let newStatus = Math.floor(Math.random() * 4)
        if(newStatus === 0){
           this.status = "Powered Up"
        } else if(newStatus === 1){
           this.status = "Big"
        } else if(newStatus === 2){
           this.status = "Small"
        } else if(newStatus === 3){
            this.status = "Dead"
        }
        return this.status

    }

    gotPowerup(){
        if (this.status === "Powered Up"){
            return this.hasStar === "You have a star!"
        } 
    }

    addCoin(){
        this.totalCoins ++;
        return this.totalCoins;
    }

    print(){
       return `Name: ${this.name} Total Coins: ${this.totalCoins} Status: ${this.status} ${this.hasStar}`
    }

}


function startGame() {
    let player = new Player();
    player.totalCoins = 0;
    let value = Math.floor(Math.random() * 3)
    if (value === 0){
        player.gotHit()
    } else if (value === 1){
        player.gotPowerup()
    } else if (value === 2){
        player.addCoin()
    }
    return player.print(this.player)
    
}

console.log(startGame())


