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
    length: "Average",
    location: "Sewers under Solar City",
    food: "Whatever he can get his hands on"
    
},
{
    image: "ecco.jpg",
    name: "Ecco",
    species: "Bottlenose Dolphin",
    length: "5'",
    location: "Home Bay near the Arctic",
    food: "Smaller fish & time orbs"
    
}
]

export const useFish = () => {
    return fishCollection.slice();
}