/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useFish } from './fishDataProvider.js'
import { Fish } from './fish.js'

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const allTheFish = useFish()


    for (const fish of allTheFish) {
        const fishHTML = Fish(fish)
        

    // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML
    }
}