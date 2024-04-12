//tomt array for å bruke senere til å lagre billettene
let billetter = [];

//function som sjekker om alle feltene er fylt ut og skrevet riktig, samtidig legger billettene til i en liste i HTML
function kjopBillett() {
    const filmInput = document.getElementById('filmer').value;
    const antallInput = document.getElementById('antall').value;
    const fornavnInput = document.getElementById('fornavn').value;
    const etternavnInput = document.getElementById('etternavn').value;
    const emailInput = document.getElementById('email').value;
    const telefonInput = document.getElementById('telefon').value;

    document.getElementById('antallFeil').textContent = '';
    document.getElementById('fornavnFeil').textContent = '';
    document.getElementById('etternavnFeil').textContent = '';
    document.getElementById('emailFeil').textContent = '';
    document.getElementById('telefonFeil').textContent = '';

    let gyldig = true;

    if (antallInput === ''){
        document.getElementById('antallFeil').textContent = 'Vennligst skriv hvor mange billetter';
        gyldig = false;
    }

    if (fornavnInput === ''){
        document.getElementById('fornavnFeil').textContent = 'Vennligst skriv inn fornavnet ditt';
        gyldig = false;
    }

    if (etternavnInput === ''){
        document.getElementById('etternavnFeil').textContent = 'Vennligst skriv inn etternavnet ditt';
        gyldig = false;
    }

    if (!valideringAvEpost(emailInput)){
        document.getElementById('emailFeil').textContent = 'Vennligst skriv inn eposten din';
        gyldig = false;
    }

    if (!valideringAvNummer(telefonInput)){
        document.getElementById('telefonFeil').textContent = 'Vennligst skriv inn telefon nummeret ditt';
        gyldig = false;
    }

    if (!gyldig){
        return;
    }

    const billett = {
        film: filmInput,
        antall: antallInput,
        fornavn: fornavnInput,
        etternavn: etternavnInput,
        epost: emailInput,
        telefon: telefonInput
    };

    billetter.push(billett);
    visBilletter();
    resetInputFelt();
}

//function som legger billettene i en liste og viser dem
function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    billetter.forEach(billett => {
        const li = document.createElement('li');
        li.textContent = `Film: ${billett.film}, antall: ${billett.antall}, fornavn: ${billett.fornavn}, etternavn: ${billett.etternavn}, E-post: ${billett.epost}, Telefon nummer: ${billett.telefon}`;
        billettListe.appendChild(li);
    });
}

//function som resetter alle input felt
function resetInputFelt() {
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefon').value = '';
}

//function som sletter alle billetter
function slettBilletter(){
    billetter = [];
    visBilletter();
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

