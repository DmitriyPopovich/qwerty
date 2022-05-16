import React from 'react'
import ErrorBoundary from "../../containers/error-boundry";
import PostFormContainer from "../../containers/post-form/post-form-container";

const PostPage = ({id}) => {
    return (
        <ErrorBoundary>
            <PostFormContainer/>
        </ErrorBoundary>
    )
}

export default PostPage
