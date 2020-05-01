// Add your code here

function submitData(n, e) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: n,
            email: e 
        }) 

    })
    .then(function(response) {
      
       return response.json();
    }) 

    .then(function(object) {
        let id = object.id
        updateBody(id)
      })
      .catch(function(error) {
          alert("oh no!");
          errors(error.message);
      })
   
}

function updateBody(id) {   
   document.body.innerHTML = id 
}

function errors(message) {
    document.body.innerHTML = message
}
