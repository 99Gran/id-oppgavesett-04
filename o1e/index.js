const listFilm = document.querySelector("#listFilm");
const inpNyFilm = document.querySelector("#inpNyFilm");
const btn = document.querySelector("#btn");

let filmer = [];


function visFilmer() {

    listFilm.innerHTML = "";

    for(const film of filmer) {
        listFilm.innerHTML += `<li>${film}</li>`;
    }
    
    inpNyFilm.value = "";
    inpNyFilm.focus();
    
}




function leggTilFilm() {
    filmer = [inpNyFilm.value, ...filmer];
    visFilmer();
}

btn.onclick = leggTilFilm;