import React from "react";

const PostForm = (props) => {
    const {title, text, handlerTitle, handlerText, handlerPost, toogleStatus} = props
    return(
        <div className='container-fluid w-75 mt-5 db-new-post' data-testid='post-container'>
            <div className='row'>
                <form>
                    <p className='text-white mt-3 text-center'>{toogleStatus ? 'Make changes' : 'Create your posts'}</p>
                    <hr/>
                    <div className='row'>
                        <div className={'col mt-3'}>
                            <input
                                type="text"
                                className="form-control db-input"
                                placeholder="Title"
                                aria-label="Title"
                                value={title}
                                data-testid='title-input'
                                onChange={handlerTitle}
                            />
                        </div>
                        <div className='col mt-3'><br/></div>
                    </div>
                    <div className="input-group mt-3">
                        <textarea
                            onChange={handlerText}
                            placeholder="Type text..."
                            className="form-control db-input"
                            value={text}
                            data-testid='text-area'
                        >
                        </textarea>
                    </div>
                    <div className={'col text-center'}>
                        {
                            toogleStatus &&
                            <button
                                type="button"
                                className="btn btn-outline-dark mt-3 me-4"
                            >
                                To back
                            </button>
                        }
                        <button
                            type="button"
                            className="btn btn-outline-dark mt-3"
                            data-testid='send-button'
                            onClick={handlerPost}
                        >
                            {toogleStatus ? 'Change' : 'Post'}
                        </button>
                    </div>
                    <hr/>
                </form>
            </div>
        </div>
    )
}

export default PostForm