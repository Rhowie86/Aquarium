/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { mostHolyFish, soldierFish, nonHolyFish } from './fishDataProvider.js'
import { Fish } from './fish.js'




export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fish-list")
    const holyFish = mostHolyFish()
    const warFish = soldierFish()
    const sinners = nonHolyFish()


    for (const fish of holyFish) {
        const fishHTML = Fish(fish)
        contentElement.innerHTML += fishHTML
    }
    

    for (const fish of warFish) {
        const fishHTML = Fish(fish)
        contentElement.innerHTML += fishHTML
    }
    

    for (const fish of sinners) {
        const fishHTML = Fish(fish)
        contentElement.innerHTML += fishHTML
    }
}        

    // Add to the existing HTML in the content element


// export const warFish = () => {

//     // Get a reference to the `<article class="content">` element
//     const contentElement = document.querySelector(".war-fish")
//     const allTheFish = soldierFish()


//     for (const fish of allTheFish) {
//         const fishHTML = Fish(fish)
        

//     // Add to the existing HTML in the content element
//         contentElement.innerHTML += fishHTML
//     }
// }
// export const sinFish = () => {

//     // Get a reference to the `<article class="content">` element
//     const contentElement = document.querySelector(".sinners")
//     const allTheFish = nonHolyFish()


//     for (const fish of allTheFish) {
//         const fishHTML = Fish(fish)
        

//     // Add to the existing HTML in the content element
//         contentElement.innerHTML += fishHTML
//     }
// }

