//tomt array for å bruke senere til å lagre billettene
let billetter = [];

//function som sjekker om alle feltene er fylt ut og skrevet riktig, samtidig legger billettene til i en liste i HTML
function kjopBillett() {

    let feil = false;

    let billett = {
        filmer: document.getElementById('filmer').value,
        antall: antallInput = document.getElementById('antall').value,
        fornavn: fornavnInput = document.getElementById('fornavn').value,
        etternavn: etternavnInput = document.getElementById('etternavn').value,
        epost: emailInput = document.getElementById('email').value,
        telefon: telefonInput = document.getElementById('telefon').value,
    }

    for (let i in billett) {
        if (billett[i] === "") {
            document.getElementById(i + "Error").innerHTML = "Vennligst fyll ut " + i;
            feil = true;
        } else {
            document.getElementById(i + "Error").innerHTML = " ";
        }
    }

    if (!feil) {
        if (billett.antall < 1) {
            document.getElementById("antallFeil").innerHTML = "Vennligst velg hvor mange billetter";
            feil = true;
        }
        if (!valideringAvNummer(billett.telefon)) {
            document.getElementById("telefonFeil").innerHTML = "Vennligst skriv inn et telefon nummer";
            feil = true;
        }
        if (!valideringAvEpost(billett.epost)) {
            document.getElementById("emailFeil").innerHTML = "Vennligst skriv inn en email adresse";
            feil = true;
        }
    }

    if (!feil) {
        billetter.push(billetter);
        resetInputFelt();

    }


    billetter.push(billetter);
    visBilletter(billetter);
    resetInputFelt();

    $.post("lagreAlle", billett, function (data) {
        console.log("Data lagret i server:", data);
        hentAlle();
    });
}

    function resetInputFelt() {
        const input = ["filmer", "antall", "fornavn", "etternavn", "telefon", "epost"]
        for (let i = 0; i < input.length; i++) {
            document.getElementById(input[i]).value = "";
        }
    }


//function som legger billettene i en liste og viser dem
function visBilletter(billetter) {
    let ut =
        <tr>
            <th>Film</th>
            <th>Antall</th>
            <th>Fornavn</th>
            <th>Etternavn</th>
            <th>Telefonnummer</th>
            <th>E-post</th>
        </tr>
    ;

    for (let billett of billetter) {
        ut +=
            "<tr>" +
            "<td>" + billett.filmer + "</td>" +
            "<td>" + billett.antall + "</td>" +
            "<td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td>" +
            "<td>" + billett.telefon + "</td>" +
            "<td>" + billett.epost + "</td>" +
            "</tr>"
    }
    $("#billetter").html(ut);
}
    function hentAlle() {
        $.get("/hentAlle", function (data) {
            console.log("data motatt fra server:", data);
            visBilletter(data)
        });
}

//function som sletter alle billetter
function slettBilletter(){
    billetter = [];
    visBilletter();
//server
    $.get("/slettAlle", function (){
        console.log("All data slettet fra server.");
        hentAlle();
    });
}

//regex for epost
function valideringAvEpost(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//regex for norske nummer
function valideringAvNummer(telefon) {
    const re = /^\d{8}$/;
    return re.test(telefon);
}




