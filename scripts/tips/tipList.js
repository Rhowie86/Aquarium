import { useTips } from './tipDataProvider.js'
import { tips } from './tips.js'

export const tipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".container--right")
    const allTips = useTips()


    for (const tipObj of allTips) {
        const tipHTML = tips(tipObj)
        

    // Add to the existing HTML in the content element
        contentElement.innerHTML += tipHTML
    }
}