let table = document.getElementById("table");

for(let i = 0; i < 9; i++){
    let request = fetch(`https://api.thecatapi.com/v1/images/search?`)
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
            let newRow = document.createElement('tr')
               
            let id = document.createElement("td");
            let url = document.createElement('td');
            let width = document.createElement('td');
            let height = document.createElement('td');

            id.innerText = responses[i].id;
            url.innerText = responses[i].url;
            width.innerText = responses[i].width;
            height.innerText = responses[i].height;

            newRow.append(id, url, width, height);

            table.appendChild(newRow);
        
        })
        .catch(() => {
          return console.log("We have a problem!!!");
        });
    
}
