 // Ouvrir la page modale en cliquant sur le bouton
var openModalButton = document.getElementById("openModal");
var modal = document.getElementById("myModal");

openModalButton.addEventListener("click", function () {
    modal.style.display = "block";
});

// Fermer la page modale en cliquant sur le bouton de fermeture
var closeButton = document.getElementsByClassName("close")[0];

closeButton.addEventListener("click", function () {
    confirmCloseModal();
});

// Fermer la page modale en cliquant en dehors de celle-ci
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        confirmCloseModal();
    }
});

// Fonction pour confirmer la fermeture de la page modale
function confirmCloseModal() {
    if (confirm("Êtes-vous sûr de vouloir fermer la page modale ?")) {
        closeModal();
    }
}

// Fonction pour fermer la page modale
function closeModal() {
    modal.style.display = "none";
}
