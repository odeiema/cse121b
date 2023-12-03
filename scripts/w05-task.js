/* W05: Programming Tasks */

/* Declare and initialize global variables */
let newDay = new Date();
let day = newDay.getDay();

let dayOutput = document.getElementById("message1");



/* async displayTemples Function */


/* async getTemples Function using fetch()*/
let temples = [];


function output(temples) {
    let divContainer = document.getElementById("temples")

    temples.forEach(temple => {
        let article = document.createElement("article");

        let header3 = document.createElement("h3")
        header3.innerHTML = temple.templeName;

        let header4 = document.createElement("h4")
        header4.innerHTML = temple.location;

        let header42 = document.createElement("h4")
        header42.innerHTML = temple.dedicated;

        let templeImage = document.createElement("img")
        templeImage.setAttribute("src", temple.imageUrl)
        templeImage.setAttribute("alt", temple.templeName)


        article.appendChild(header3);
        article.appendChild(header4);
        article.appendChild(header42);
        article.appendChild(templeImage);

        divContainer.appendChild(article)

    });


}

/* reset Function */


/* sortBy Function */



async function getTemples(){
    const response = await fetch ( "https://byui-cse.github.io/cse121b-course/week05/temples.json");
    const data = await response.json();
    console.log(data);
}

/* Event Listener */
