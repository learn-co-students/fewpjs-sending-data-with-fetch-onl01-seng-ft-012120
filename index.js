

function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    }; 

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
  
    fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
        let element = document.createElement('p');
        element.innerHTML = `${object.id}`;
        document.querySelector('body').appendChild(element);
    })
    .catch(function(error) {
        console.log(error.message);
        alert("Bad things! Ragnarők!");
        let element = document.createElement('p');
        element.innerHTML = error.message;
        document.querySelector('body').appendChild(element);
    });
}
