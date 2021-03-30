import axios from "axios";

export const postPosts = (data) => axios.post("http://jsonplaceholder.typicode.com/posts", data)

