export function createUser(obj) {
    return fetch('http://localhost:3001/api/carry_me/users', {
        method: 'POST',
        body: obj
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // }
    }).then(checkStatus)
      .then(parseJSON);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    var error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
}

function parseJSON(response) {
    console.log(response);
    return response.json();
}
