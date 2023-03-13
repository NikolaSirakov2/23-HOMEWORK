for(let j = 1; j < 3; j++){
let container = document.getElementById(`${j}`);

if(container.id !== "1"){
  container.style.display = "none"
}

let table = document.createElement("table");
container.appendChild(table);
table.id = "table";
let firstRow = document.createElement("tr");

let heading1 = document.createElement('th');
heading1.innerText = "ID";
let heading2 = document.createElement('th');
heading2.innerText = "Image link";
let heading3 = document.createElement('th');
heading3.innerText = "Image width";
let heading4 = document.createElement('th');
heading4.innerText = "Image height";

firstRow.append(heading1, heading2, heading3, heading4);

table.appendChild(firstRow);

for(let i = 0; i < 5; i++){
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
    }