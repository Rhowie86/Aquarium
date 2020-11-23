const fishCollection = [
{
    image: "3eyed.png",
    name: "Blinky Klaus",
    species: "Mutated Goldfish",
    length: 8,
    location: "Polluted River",
    food: "Radioactive Sludge"
},
{
    image: "ripster.jpg",
    name: "Ripster",
    species: "Human/Shark",
    length: 10,
    location: "Fission City",
    food: "Hamburgers"
},
{
    image: "SewerShark.jpg",
    name: "Rookie",
    species: "Human Sewer Jockey",
    length: 6,
    location: "Sewers under Solar City",
    food: "Whatever he can get his hands on"
    
},
{
    image: "ecco.jpg",
    name: "Ecco",
    species: "Bottlenose Dolphin",
    length: 9,
    location: "Home Bay near the Arctic",
    food: "Smaller fish & time orbs"
    
}
]

export const useFish = () => {
    return fishCollection.slice();
}

export const mostHolyFish = () => {
    //3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0 )
        holyFish.push(fish)
    }
    return holyFish 
    
}

const holiestFish = mostHolyFish()
console.log("holy fish?", holiestFish)

export const soldierFish = () => {
    //5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.lengh % 3 !==0)
        soldiers.push(fish)
    }

    return soldiers
}

const warFish = soldierFish()
console.log("fish with guns", warFish)

export const nonHolyFish = () => {
    //Any fish not a multiple of 3 or 5
    const sinners = []

    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
        sinners.push(fish)
    }

    return sinners
    }
}

const unclean = nonHolyFish()
console.log("Convert or perish", unclean)