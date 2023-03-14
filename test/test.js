function easyFetch(url) {
    return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("Error!!!");
      }
    });
  }

let person = easyFetch('https://swapi.dev/api/people/1/')
  .then(response => {
    console.log(response);
    let planet = response.homeworld
    return easyFetch(planet);
  })
  .then(planet => {
    console.log(planet);
    let residents = planet.residents;
    return easyFetch(residents[6]);
  })
  .then(resident => {
    console.log(resident);
    let starship = resident.starships;
    return easyFetch
  })








