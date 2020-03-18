const inpNyvenn = document.querySelector("#inpNyvenn");
const nyVenn = document.querySelector("#nyVenn");
const alder = document.querySelector("#alder");
const btn = document.querySelector("#btn");

let venner = [
    { navn: "", alder: 25 },
    { navn: "", alder: 43 },
    { navn: "", alder: 24 }
];


function visVenn() {
    nyVenn.innerHTML += "";

    inpNyvenn.value="";
    alder.value="";
}


function leggTilVenn() {
    venner = [nyVenn.value];
    visVenn();
}

btn.onclick = leggTilVenn;