import React from 'react'


import Post from "../../components/post";

const PostsPage = ({posts=[]}) => {
    return (
        <>
            {posts && posts?.map(post => <Post post={post}/>)}
            <p>no posts</p>
        </>

    )
}

export default PostsPage
