import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    const getComments = async () => {
        const { data: comments } = await axios.get('http://jsonplaceholder.typicode.com/comments')
        setComments(comments);
        // console.log("post list: ", posts);
        // console.log("first post: ", posts[0]);
        console.log("Chamou getComments");
    };

    useEffect(() => {
        getComments();
    }, []);

    useEffect(() => {
        console.log(comments);
    }, [comments]);

    if (comments.length === 0) {
        return <h1>Comments</h1>;
    }

    return (
        <Comment comments={comments} />
    )
};


export default Comments;