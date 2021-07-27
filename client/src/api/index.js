import axios from "axios";

//assign posts to a variable
const url = "http://localhost:5000/posts";

//get the posts using axios
export const fetchPosts = () => axios.get(url);
