// Add your code here
configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
};

fetch("http://localhost:3000/dogs", configObj)

const submitData = () => {
    let url = "http://localhost:3000/users";
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "John Doe",
            email: "john@doe.com"
        })
    })
    .then((response)=> {
         return response.json()
    })
    .then((object)=> {
        console.log(object)
    })
}