const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
    headers: {
        'X-RapidAPI-Key': '0043c1710dmsha7937c5f85548cbp16df2ejsn4b7a9e09fb08'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK");
}).catch(function (error) {
    console.error(error);
});