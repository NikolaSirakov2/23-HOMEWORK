let getIP = document.getElementById('getIP');
let container = document.getElementById('container')

getIP.onsubmit = (e) => {
    e.preventDefault();

    console.log(e.target.elements.ip.value);
    let ip = e.target.elements.ip.value.trim();
    
    let request = fetch(`https://ipapi.co/${ip}/json/`)
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Error!!!");
        }
      })
      .then((body) => {
        return body;
      });

    request
        .then((responses) => {
            console.log(responses);
            container.innerHTML = "";
               
            let city = document.createElement("p");
            let network = document.createElement('p');
            let country = document.createElement('p');

            country.innerText = `Country: ${responses.country_name}`;
            city.innerText = `City: ${responses.city}`;
            network.innerText = `Network: ${responses.network}`;

            container.appendChild(country)
            container.appendChild(city);
            container.appendChild(network)
        
        })
        .catch(() => {
          return console.log("We have a problem!!!");
        });
    
}