import React from 'react'

import ErrorBoundary from "../../containers/error-boundry";
import PostsContainer from "../../containers/posts";

const PostsPage = () => {
    return (
        <ErrorBoundary>
            <PostsContainer />
        </ErrorBoundary>
    )
}

export default PostsPage
