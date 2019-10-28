import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 06228c12c8102207417c66f986b2c5b171c5b089fa8dd1df03210fcbc1e4a4c4'
    }

});