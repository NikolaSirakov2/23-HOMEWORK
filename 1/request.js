let image = document.getElementById("img");
let changePicButton = document.getElementById("changePic");

changePicButton.addEventListener("click", () => {
  let request = new XMLHttpRequest();
  request.open("GET", "https://dog.ceo/api/breeds/image/random");
  request.responseType = "json";
  request.send();

  request.onload = () => {
    console.log(request.response);
    image.style.display = "block";
    image.src = request.response.message;
  };
});