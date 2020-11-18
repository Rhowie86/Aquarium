const locationList = [
    {
        image: "springfieldriver.jpg",
        name: "Springfield River",
        url: "http://simpsons.fandom.com/wiki/Springfield_River",
        desc: "A polluted river in Springfield",

    },
    {
        image: "city.jpg",
        name: "Fission City",
        url: "http://streetsharks.fandom.com/wiki/Fission_City",
        desc: "Fission City is an absolute hell hole being terrorized by the Nefarious Dr.Paradigm, and other villians.",
        
    },
    {
        image: "",
        name: "",
        url: "http://",
        desc: "",
        
    },
    {
        image: "",
        name: "",
        url: "http://",
        desc: "",
        
    },
    {
        image: "",
        name: "",
        url: "http://",
        desc: "",
        
    }
]


export const useLocation = () => {
    return locationList.slice();
}