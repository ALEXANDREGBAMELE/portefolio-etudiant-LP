


function afficherValeur() {

    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;

    alert(
        // "Nom : " + nom,
        "Prenom : " + prenom,
        // "Telephone : " + telephone,
        // "E-mail : " + email
    );
    if (prenom.length <= 0) {
        alert('champ invalide')
    }
    else {
        alert('champ valide')
    }

}

var boutton = document.getElementById('boutton');
boutton.addEventListener('submit', function(event){
    var nom = document.getElementById('nom');
    event.preventDefault();
    alert('nom')
})

// function afficherValeur() {
// var formulaire = document.getElementById('formulaire');
// formulaire.addEventListener('submit', function (event) {
//     var nom = document.getElementById('nom');
//     var prenom = document.getElementById('prenom');
//     var messageNom = document.getElementById('messageNom');
//     var messagePrenom = document.getElementById('messagePrenom');

//     if (nom.value === '') {
//         messageNom.innerHTML = 'Le champ Nom est obligatoire.';
//         event.preventDefault();
//     } else {
//         messageNom.innerHTML = '';
//     }

//     if (prenom.value === '') {
//         messagePrenom.innerHTML = 'Le champ Prénom est obligatoire.';
//         event.preventDefault();
//     } else {
//         messagePrenom.innerHTML = '';
//     }
// });
// }




