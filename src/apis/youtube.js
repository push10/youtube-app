import Axios from "axios";

const KEY = 'AIzaSyCGlahzBDm4HR6WRaygFcgP-f3lOlJGJSE';

export default Axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY
    }
})