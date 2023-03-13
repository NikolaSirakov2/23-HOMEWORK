let call = document.getElementsByClassName("collapsible");

for (i = 0; i < call.length; i++) {
  call[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = document.getElementById("content");

    let randomID = Math.floor(Math.random() * 11);
    content.innerHTML = "";

    let comments = fetch(
      `https://jsonplaceholder.typicode.com/posts/${randomID}/comments`
    )
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

    comments
      .then((responses) => {
        responses.forEach((elem) => {
          let comment = document.createElement("p");
          
          comment.innerText = `${elem.id}: ${elem.body}`;
          comment.style.width = "250px";

          content.appendChild(comment);
        });
      })
      .catch(() => {
        return console.log("We have a problem!!!");
      });

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
