let table = document.getElementById("table");

for(let i = 0; i < 10; i++){
    let request = fetch(`https://api.thecatapi.com/v1/images/search?`)
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Error!!!");
        }
      })
      .then((body) => {
        console.log(body[0].url);
        let newRow = document.createElement('tr')
               
                let id = document.createElement("td");
                let url = document.createElement('td');
                let width = document.createElement('td');
                let height = document.createElement('td');
    
                id.innerText = body[0].id;
                url.innerText = body[0].url;
                width.innerText = body[0].width;
                height.innerText = body[0].height;
    
                newRow.append(id, url, width, height);
    
                table.appendChild(newRow);
            
            })
            .catch(() => {
              return console.log("We have a problem!!!");
            });
      }
