// Add your code here

let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}
function submitData(name, email) {
    let newConfigObj = Object.assign({}, configObj)
    newConfigObj.body = JSON.stringify({name: name, email: email})
    return fetch("http://localhost:3000/users", newConfigObj)
        .then(function(response) {
            return response.json();
        }).then(function(object) {
            console.log(object)
            let newElement = document.createElement("P")
            newElement.innerHTML = object.id
            document.body.appendChild(newElement)
        })
        .catch(function(error) {
            // let newElement = document.createElement("P")
            // newElement.innerText = error.message
            document.body.innerHTML = error.message
            console.log(error.message)
        });
}
