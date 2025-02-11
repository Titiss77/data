// extensions.js

// Fonction pour lire l'extension à partir du fichier texte
function extentionNightflix() {
    return fetch('extend_nightflix.txt')
        .then(response => response.text())
        .then(text => text.trim()) // Suppression des espaces superflus
        .catch(error => {
            console.error('Erreur de chargement du fichier extend_nightflix.txt:', error);
            return ".pics"; // Retour par défaut si erreur
        });
}

// Chargement du fichier JSON et remplacement de {ext} dans les liens
function updateFilmLinks() {
    fetch('enregistrement.json')
        .then(response => response.json())
        .then(films => {
            // Chargement de l'extension à partir du fichier texte
            extentionNightflix().then(extension => {
                films.forEach(film => {
                    // Remplacer {ext} par l'extension appropriée
                    film.lien = film.lien.replace("{ext}", extension);
                });

                // Affichage des films avec les liens générés
                console.log(films);
            });
        })
        .catch(error => {
            console.error('Erreur de chargement du fichier enregistrement.json:', error);
        });
}

// Appel de la fonction pour mettre à jour les liens
updateFilmLinks();
