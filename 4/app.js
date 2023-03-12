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
      
        for(let n = 0; n < 1; n++){
            console.log(response[0][n]);
            let email = document.createElement("option");
            email.value = response[0][n].email;
            email.innerText = response[0][n].email;
            
            let selectedId = response[0][n].id;

            
            let postsReq = easyFetch(`https://jsonplaceholder.typicode.com/users/${selectedId}/posts`)
                    .then((posts) => {
                        console.log(posts);
                        console.log("---------");
                        return posts;
                    });


            postsReq
                    .then(posts => {
                        for(let i = 0; i < posts.length; i++){
                            let container = document.getElementById("container");
                            let post = document.createElement("p");
                            post.innerText = posts[i].body;
                            container.appendChild(post);
                        }
                    })

            let albumsReq = easyFetch(`https://jsonplaceholder.typicode.com/users/${selectedId}/albums`)
                    .then((albums) => {
                        console.log("---------");
                        console.log(albums);
                        return albums;
                    });


            albumsReq
                    .then(albums => {
                        for(let i = 0; i < albums.length; i++){
                            let container = document.getElementById("albums");
                            let album = document.createElement("p");
                            album.innerText = albums[i].title;
                            container.appendChild(album);
                        }
                    })        
            

            emails.appendChild(email);
        }
    })
    .catch(() => {
      return console.log("We have a problem!!!");
    });
