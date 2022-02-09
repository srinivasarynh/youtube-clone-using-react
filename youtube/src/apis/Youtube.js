import axios from "axios";


const KEY = '';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        type: 'video',
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});