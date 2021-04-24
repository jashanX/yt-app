import axios from "axios";
const KEY = "AIzaSyAxijk9SxRnsRlSQ1gyXtM6lnFkMotnYe8";

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:"10",
        key:KEY   
    }
})
export default youtube;