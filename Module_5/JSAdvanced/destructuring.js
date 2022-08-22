// let setting = ["API URL", "Session Id", "Token"];

// let api_URL = setting[0];
// let sessionId = setting[1];
// let token = setting[2];

// let [api_URL, sessionId, token] = setting;

// console.log(api_URL, sessionId, token)

let setting = {
    apiUrl : 'https://meet.google.com/nrx-vkam-ova',
    sessionId: '234346457657658',
    token: '681db905-9fb4-4c85-ae16-9f3615321eed'
}

let { token, apiUrl } = setting;

console.log(token)
// console.log(sessionId)
console.log(apiUrl)