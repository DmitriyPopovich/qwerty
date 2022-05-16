import React from "react";
import Post from "../../components/post";

const PostsContainer = () => {


    const posts = []

    return (
        <>
            {posts && posts?.map(post => <Post post={post}/>)}
            <p>no posts</p>
        </>
    )
}
export default PostsContainer
