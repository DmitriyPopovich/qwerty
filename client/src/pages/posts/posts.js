import React, {useEffect} from 'react'
import moment from "moment"
import {v4} from "uuid"
import {useDispatch} from "react-redux"

import './posts.scss'


const Posts = ({posts=[]}) => {

    return (
        <>
            {posts &&
                posts?.map(el => {
                        return (
                            <div className='container-fluid w-75 mt-5 mb-5 db-posts' key={v4()}
                                 data-testid='post-container'>
                                <div className='row'>
                                    <div className='col db-posts-area text-white mt-3' data-testid='post-name'>
                                        {el.name}
                                    </div>
                                    <div className='col db-posts-area text-white mt-3 text-end' data-testid='post-title'>
                                        {el.title}
                                    </div>
                                </div>
                                <hr/>
                                <div className='row'>
                                    <div className='col text-white text-center db-posts-text' data-testid='post-text'>
                                        <p>{el.post}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-white d-flex align-items-center mb-2" data-testid='post-time'>
                                        {moment(el.createdAt).format('LL h:mma')}
                                    </div>
                                    {el.userId === localStorage.getItem('userId')
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
            )
            }
            <p>no posts</p>
        </>

    )
}

export default Posts
