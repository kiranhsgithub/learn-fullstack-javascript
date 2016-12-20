//fetch data from api


import config from './config';
import axios from 'axios';
 

axios.get(`${config.serverUrl}/api/contests`)
    .then(response => {
        console.log(response.data);
    })
    .catch(console.error);