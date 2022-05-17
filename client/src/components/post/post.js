import React from 'react'
import moment from "moment";

const Post = ({post}) => {

    return (
        <div className='container-fluid w-75 mt-5 mb-5 db-posts'
             data-testid='post-container'>
            <div className='row'>
                <div className='col db-posts-area text-white mt-3' data-testid='post-name'>
                    {post.title}
                </div>
                <div className='col db-posts-area text-white mt-3 text-end' data-testid='post-title'>
                    {post.text}
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col text-white text-center db-posts-text' data-testid='post-text'>
                    <p>{post.text}</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-white d-flex align-items-center mb-2" data-testid='post-time'>
                    {moment(post.createdAt).format('LL h:mma')}
                </div>
                {post.userId === localStorage.getItem('userId')
                && <div className="col mb-2 text-end">
                    <button
                        type="button"
                        className="btn btn-outline-secondary me-2"
                    >
                        Change
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-testid='delete-button'
                    >
                        Delete
                    </button>
                </div>}
            </div>
        </div>
    )
}
export default Post
