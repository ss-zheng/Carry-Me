var url = "http://localhost:3001/"

function handleErrors(response){
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


module.exports = {
    createAccount: function(data) {
        var myinit = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        console.log("before fetch");
        return fetch(url + "users", myinit)
            .then(handleErrors)
            .then(response => {
                console.log("success");
                return Promise.resolve(false);
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    }
}

