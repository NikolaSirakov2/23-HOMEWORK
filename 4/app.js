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
            
            

            emails.addEventListener("input", (e) => {

            let selectedId = response[0][n].id;
            console.log(e.target.value);
            console.log("-----");

            let postsReq = easyFetch(`https://jsonplaceholder.typicode.com/users/${selectedId}/posts`)
                    .then((posts) => {
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
                    
            let toDoReq = easyFetch(`https://jsonplaceholder.typicode.com/users/${selectedId}/todos`)
                    .then((todos) => {
                        return todos;
                    });


            toDoReq
                    .then(todos => {
                        for(let i = 0; i < todos.length; i++){
                            let container = document.getElementById("todo");
                            
                            if(todos[i].completed){
                            let toDo = document.createElement("p");
                            toDo.innerText = todos[i].title;
                            container.appendChild(toDo);
                            }
                        }
                    })        
                    
                })

            emails.appendChild(email);
        }
    })
    .catch(() => {
      return console.log("We have a problem!!!");
    });
