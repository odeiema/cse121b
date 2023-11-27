/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myprofile = {
    name:"Odette Aguilar"
    photo:,
    hobbies: [
    'read', 
    'listen to music', 
    'crochet',
    ]    
        favoriteFoods: [
        'White Rice',
        'Pasta',
        'cookies'
    ],
    placesLived: [{
        place: 
        "Texas", 
        timeLived: 7
    },
    {
        place:
        "Utah",
        timeLived: 18
    },
    {
        place: "Mexico",
        timeLived: 2
    },
    {
        place: 
        "Idaho",
        timeLived: 2

    }

  ]
    
};



/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */
name_out = document.getElementById("name");
name_out.innerHTML = info.name;
/* Photo with attributes */

photo_out = document.getElementById("photo");
photo_out.setAttribute("src", info.photo);
photo_out.width = 240;
photo_out.height = 300;
/* Favorite Foods List*/

foodList = info.favoriteFoods;

for (let i = 0; i < foodList.length; i++) {
    let list = document.createElement('li');
    list.innerText = foodList[i];
    document.querySelector('#favorite-foods').appendChild(list);
}

/* Hobbies List */

hobbiesList = info.hobbies;

for (let i = 0; i < hobbiesList.length; i++) {
    let list = document.createElement('li');
    list.innerText = hobbiesList[i];
    document.querySelector('#hobbies').appendChild(list);
}
/* Places Lived DataList */

let placesOut = "";
place = info.placesLived
place.forEach(countPlaces)

document.getElementById("places-lived").innerHTML = placesOut;

function countPlaces(place) {
    placesOut += "<dt>" + place.place + "</dt>" + "<dd>" + place.timeLived + " years" + "</dt>";
}
