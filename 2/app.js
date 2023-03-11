let randomFiveFoxImages = document.getElementById("foxImages");

randomFiveFoxImages.addEventListener("click", () => {

  let container = document.getElementById("container");
  container.innerHTML = "";

  function easyFetch(url) {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("Error!!!");
      }
    });
  }

  let foxes = Promise.all([
    easyFetch("https://randomfox.ca/floof"),
    easyFetch("https://randomfox.ca/floof"),
    easyFetch("https://randomfox.ca/floof"),
    easyFetch("https://randomfox.ca/floof"),
    easyFetch("https://randomfox.ca/floof"),
  ]).then((responses) => {
    console.log(responses);
    return responses;
  });

  foxes
    .then((responses) => {
      responses.forEach((elem) => {
        let image = document.createElement("img");
        image.src = elem.image;
        image.style.width = "250px";

        container.appendChild(image);
      });
    })
    .catch(() => {
      return console.log("We have a problem!!!");
    });
});
