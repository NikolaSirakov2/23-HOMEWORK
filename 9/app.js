let requestButton = document.getElementById("requestButton");
let imageContainer = document.getElementById("container");
let loading = document.getElementById("Loading");

requestButton.addEventListener("click", (e) => {
  loading.innerText = "Loading...";
  imageContainer.innerHTML = "";
  let request = fetch("https://randomfox.ca/floof/")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let image = document.createElement("img");
      image.src = response.image;
      image.style.width = "500px";

      imageContainer.appendChild(image);
      loading.innerText = "";
    });
});
