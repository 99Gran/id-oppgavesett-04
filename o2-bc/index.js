const inpNyvenn = document.querySelector("#inpNyvenn");
const nyVenn = document.querySelector("#nyVenn");
const alder = document.querySelector("#alder");
const btn = document.querySelector("#btn");

let venner = [
    { navn: "", alder: 25 },
    { navn: "", alder: 43 },
    { navn: "", alder: 24 }
];


function visVenner() {

    listVenn.innerHTML = "";

    for(const venner of venner) {
        listVenn.innerHTML += `<li>${venner}</li>`;
    }
    
    inpNyvenn.value = "";
    inpNyvenn.focus();
    
}




function leggTilVenn() {
    venner = [inpNyvenn.value, ...venner];
    visVenner();
}

btn.onclick = leggTilVenn;