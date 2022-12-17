/*Haal 6 pseudo-gebruikers op met behulp van de fetch-methode.
Gebruik hiervoor de https://randomuser.me/ API.
Geef voor elke user zijn/haar profiel foto (large), volledige naam en locatie weer.
*/

// array met merken van koffiebonen
const complimenten = ["klantvriendelijkheid", "snel werk", "goede prijs/kwaliteit verhouding", "service", "website", "stiptheid", "vlotte communicatie", "verstaanbare uitleg", "geduld", "afwerking", "opvolging"];
// array met merken van koffiebonen
function random_item(complimenten) {
    return complimenten[Math.floor(Math.random() * complimenten.length)];
}



// maak connectie met random user generator API en haal 6 users op
fetch('https://randomuser.me/api/?results=6')
    .then(function (response) {
        // nakijken of de API-call een antwoord terugstuurt
        if (response.ok) {
            // als de status "ok" (=200) is, dan wordt het antwoord omgezet in JSON
            return response.json();
        } else {
            // als de status niet "ok" is, geef dan de status terug en annuleer het uitvoeren
            return Promise.reject(response.status);
        }
    })


    .then(function (response) {
        // lees het volledige antwoord uit in de console
        console.log(response);
        // plaats een section met grid
        let html = '<section class="row">';
        // plaats van de gebruikers met afbeelding, naam,...in HTML
        for (let i = 0; i < response.results.length; i++) {
            const user = response.results[i];
            html += `<div class="card col-12 col-sm-6 col-md-4 mb-3">

			<img src="${user.picture.large}" class="card-img-top" alt="foto van ${user.name.first} ${user.name.last}">

			<div class="card-body">
			<p class="card-title text-uppercase fs-6 fw-bolder pt-3">${user.name.first} ${user.name.last}</p>
			<p class="card-text h6 small mt-2">Ik kom uit ${user.location.country} en vind IOT bedrijf NANDOCOOMANS super voor hun ${random_item(complimenten)}!</p>
            <p class="socials">
            <i class="bi bi-star-fill text-dark fs-3"></i>
        <i class="bi bi-star-fill text-dark fs-3"></i>
        <i class="bi bi-star-fill text-dark fs-3"></i>
        <i class="bi bi-star-fill text-dark fs-3"></i>
        <i class="bi bi-star-fill text-dark fs-3"></i>
        </p>
            </div>
      </div>`;
        }
        html += '</section>';
        /*document.body.insertAdjacentHTML('beforeend', html);*/
        document.getElementById("clients").innerHTML = html;
    })

    .catch(function (error) {
        // indien er een fout is, toon in de console dan wat er misloopt
        console.error("Error with message: " + error)
    });