



  let emails = document.getElementById("emails");
  

  function easyFetch(url) {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("Error!!!");
      }
    });
  }

  let users = Promise.all([
    easyFetch("https://jsonplaceholder.typicode.com/users")
  ]).then((response) => {
    console.log(response[0].length);
    return response;
  });

 
  users
    .then(response => {
      
        for(let n = 0; n < response[0].length; n++){
            console.log(response[0][n]);
            let email = document.createElement("option");
            email.value = response[0][n].email;
            email.innerText = response[0][n].email;
            emails.appendChild(email);

            let selectedId = response[0][n].id;

            let postsReq = easyFetch(`https://jsonplaceholder.typicode.com/users/${selectedId}/posts`)
                    .then((posts) => {
                        console.log(posts);
                        return posts;
                    });


        }
    })
    .catch(() => {
      return console.log("We have a problem!!!");
    });
