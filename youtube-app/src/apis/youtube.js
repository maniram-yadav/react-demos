import axios from 'axios'

const KEY='AIzaSyDRMAyL-WxehlxUnbm8Ps7LvlfNRPKE63M';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part:'snippet',
        maxResults:5,
        key:KEY
    }
}); 