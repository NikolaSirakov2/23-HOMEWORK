let container = document.getElementById('container');
let image = document.createElement("img");

fetch('https://randomfox.ca/floof')
        .then(response => {
            if(response.ok){
                return response.json();
            } else {
                console.log("Error!!!");
            }
        })
        .then(body => {
            console.log(body.link);
            
            
        })