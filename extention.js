function extentionNightflix() {
    return fetch('https://titiss77.github.io/data/extend_nightflix.txt')
        .then(response => response.text())
        .then(text => text.trim())
        .catch(error => {
            console.error('Erreur de chargement du fichier extend_nightflix.txt:', error);
            return ".pics";
        });
}

function updateFilmLinks() {
    fetch('https://titiss77.github.io/data/enregistrement.json')
        .then(response => response.json())
        .then(films => {
            extentionNightflix().then(extension => {
                films.forEach(film => {
                    film.lien = film.lien.replace("{ext}", extension);
                });

                console.log(films);
                return films;
            });
        })
        .catch(error => {
            console.error('Erreur de chargement du fichier enregistrement.json:', error);
        });
}

updateFilmLinks();
