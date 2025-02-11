// extensions.js
function extentionNightflix() {
    // Exemple de correspondance d'ID avec des extensions (cela peut venir d'une source externe)
    const extensions = ".pics";

    // Retourne l'extension correspondante selon l'ID
    return extensions[id] || ".pics"; // Par défaut, retourne .pics si l'ID n'est pas trouvé
}

// Chargement du fichier JSON
fetch('enregistrement.json')
    .then(response => response.json())
    .then(films => {
        // Mise à jour des liens avec l'extension appropriée
        films.forEach(film => {
            const extension = extentionNightflix();
            // Remplacer {ext} par l'extension appropriée
            film.lien = film.lien.replace("{ext}", extension);
        });

        // Affichage des films avec les liens générés
        console.log(films);
    })
    .catch(error => {
        console.error('Erreur de chargement du fichier enregistrement.json:', error);
    });