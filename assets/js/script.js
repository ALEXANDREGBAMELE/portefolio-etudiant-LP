
var nom = document.getElementById('nom').value;
var prenom = document.getElementById('prenom').value;
var telephone = document.getElementById('telephone').value;
var email = document.getElementById('email').value;

function afficherValeur() {
    alert(
        // "Nom : " + nom,
        "Prenom : " + prenom,
        // "Telephone : " + telephone,
        // "E-mail : " + email
    );
    if(prenom.length <= 0){
        alert('champ invalide')
    }
    else{
        alert('champ valide')
    }
    
}