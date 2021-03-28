import React from "react";

const Comment = ({ comments }) => {
    return (
        <div>
            <h1>Comments</h1>
            {/* <h3>{posts[0].title}</h3>
            <p>{posts[0].body}</p>
            <h3>{posts[1].title}</h3>
            <p>{posts[1].body}</p>
            <h3>{posts[2].title}</h3>
            <p>{posts[2].body}</p> */}
            {comments.map((comments) => {
                return (
                    <div key={comments.id}>
                        <h3>{comments.email}</h3>
                        <h3>{comments.name}</h3>
                        <p>{comments.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Comment;