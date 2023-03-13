let requestButton = document.getElementById("requestButton");

requestButton.addEventListener('click', (e) => {
    let request = fetch("https://randomfox.ca/floof/")
            .then((response) => {
                return response.json();
            })
            .then(response => {
                console.log(response.image);
            })
})