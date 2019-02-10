const axios = require('axios');

function getGithubData() {
    axios.get('http://127.0.0.1:5000/')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
}

getGithubData();