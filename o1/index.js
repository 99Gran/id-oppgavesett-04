/* let filmer = ["Spirited Away", "Up", "The Bucket List", "Bambi", "Titanic", "Churchill"];

filmer = [...filmer, "Anna Karanina"]
filmer = ["Mulan", ...filmer]

filmer[2] = "Leon";

console.log(filmer)*/

const listFilm = document.querySelector("#listFilm");
const inpNyFilm = document.querySelector("#inpNyFilm");
const btn = document.querySelector("#btn");

let film = [];


function visFilmer() {

    listFilm.innerHTML = "";

    for(const film of filmer) {
        listFilm.innerHTML += `<li>${film}</li>`;
    }
    
    inpNyFilm.value = "";
    inpNyFilm.focus();
    
}




function leggTilFilm() {
    film = [inpNyFilm.value, ...film];
    visFilmer();
}

btn.onclick = leggTilFilm;