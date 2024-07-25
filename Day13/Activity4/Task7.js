const axios = require('axios');

const url = 'https://api.github.com/';

axios.get(url)
  .then(response => {
    console.log('Response data:', response.data);
  })
  .catch(error => {
    console.error('Error making the request:', error);
  });
