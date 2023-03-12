let firstDogImage = document.getElementById("firstDogImage");

firstDogImage.addEventListener("click", () => {

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

  let dog = Promise.race([
    easyFetch("https://dog.ceo/api/breeds/image/random"),
    easyFetch("https://dog.ceo/api/breeds/image/random"),
    easyFetch("https://dog.ceo/api/breeds/image/random"),
    easyFetch("https://dog.ceo/api/breeds/image/random"),
    easyFetch("https://dog.ceo/api/breeds/image/random"),
  ]).then((response) => {
    console.log(response);
    return response;
  });

 
  dog
    .then(response => {
      
        let image = document.createElement("img");
        image.src = response.message;
        image.style.width = "450px";

        container.appendChild(image);
      
    })
    .catch(() => {
      return console.log("We have a problem!!!");
    });
})
