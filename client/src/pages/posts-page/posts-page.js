import React from 'react'

import ErrorBoundary from "../../containers/error-boundry";
import PostsContainer from "../../containers/post";

const PostsPage = () => {
    return (
        <ErrorBoundary>
            <PostsContainer />
        </ErrorBoundary>
    )
}

export default PostsPage
