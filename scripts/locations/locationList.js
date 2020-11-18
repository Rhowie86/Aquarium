import { useLocation } from './locationsDataProvider.js'
import { location } from './locations.js'

export const locationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    const allLocations = useLocation()


    for (const placeObj of allLocations) {
        const locHTML = location(placeObj)
        

    // Add to the existing HTML in the content element
        contentElement.innerHTML += locHTML
    }
}