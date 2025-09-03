//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixShow{
    constructor(network,showName,mainCharacter,genre){
        this.network = network
        this.showName = showName 
        this.mainCharacter = mainCharacter
        this.genre = genre 
    }

        binge(){
            console.log('Play the next e-pi-sode white boy! We are watching the whole season!')
        }
        ads(){
            console.log('Hate that we pay and still get ads!!!!!')
        }
        relatedShows(){
            console.log('Searching for similar shows that you may like....')
        }
    
}

let office = new NetflixShow('pbs','The Office','Michael Scott','Comedy')