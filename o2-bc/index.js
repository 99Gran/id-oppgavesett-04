const inpNavn = document.querySelector("#inpNavn");
const inpAlder = document.querySelector("#inpAlder");
const btn = document.querySelector("#btn");

let venneliste = document.querySelector("#venneliste");

let venner = [
    { navn: "Petter", alder: 25 },
    { navn: "Silje", alder: 43 },
    { navn: "Nina", alder: 24 }
];


function visVenner() {
    venneliste.innerHTML = "<div><strong>Navn</strong></div><div><strong>Alder</strong></div>";

    for(const venn of venner) {
        venneliste.innerHTML += `
            <div>${venn.navn}</div>
            <div>${venn.alder}</div>
        `
    }
}

visVenner()


function leggTilVenn() {
    const nyVenn = { navn: inpNavn.value, alder: inpAlder.value }
    // venner.push(nyVenn)
    venner = [nyVenn, ...venner]
    
    visVenner();
}

btn.onclick = leggTilVenn;