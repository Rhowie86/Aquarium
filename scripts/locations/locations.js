export const location = (place) => {
    return `
        <section class="location card">
            <div><img  class="location__image image--card" src="images/${place.image}" /></div>
            <div class="location__name">Name: ${place.name}</div>
            <div class="location__url"><a href="${place.url}">More info</a></div>
            <div class="location__desc">${place.desc}</div>
        </section>
    `
}