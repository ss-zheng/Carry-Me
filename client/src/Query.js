var server='https://localhost:3001/'
export function createUser(obj) {
    console.log(obj);
    return fetch(`http://localhost:3001/api/carry_me/users`, {
        method: 'POST',
        body: JSON.stringify(obj),
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
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
