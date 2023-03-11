let container = document.getElementById('container');

fetch('https://randomfox.ca/floof')
        .then(response => {
            if(response.ok){
                return response.json();
            } else {
                console.log("Error!!!");
            }
        })
