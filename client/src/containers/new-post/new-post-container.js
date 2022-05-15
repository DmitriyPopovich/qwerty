import React, {useState} from 'react'
import {useDispatch} from "react-redux";



const NewPostContainer = () => {

    const dispatch = useDispatch()
    // const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const changeStatus = false
    //const handlerName = () => setName(name)
    const handlerTitle = () => setTitle(title)
    const handlerText = () => setText(text)
    // const handlerPost = () => dispatch(setPost(post))
    const handlerPost = () => console.log('post.....')


    return (
            <div className='container-fluid w-75 mt-5 db-new-post' data-testid='post-container'>
                <div className='row'>
                    <form>
                        <p className='text-white mt-3 text-center'>{changeStatus ? 'Make changes' : 'Create your post'}</p>
                        <hr/>
                        <div className='row'>
                            <div className='col mt-3'>
                                {/*<input*/}
                                {/*    type="text"*/}
                                {/*    className="form-control db-input"*/}
                                {/*    placeholder="Name"*/}
                                {/*    aria-label="Name"*/}
                                {/*    value={name}*/}
                                {/*    data-testid='name-input'*/}
                                {/*    onChange={handlerName}*/}
                                {/*/>*/}
                            </div>
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
                                changeStatus &&
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
                                {changeStatus ? 'Change' : 'Post'}
                            </button>
                        </div>
                        <hr/>
                    </form>
                </div>
            </div>
    )
}

export default NewPostContainer