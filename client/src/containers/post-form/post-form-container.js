import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import PostForm from "../../components/post-form/post-form";
import {useNavigate, useParams} from "react-router-dom";



const PostFormContainer = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const handlerTitle = (e) => setTitle(e.target.value)
    const handlerText = (e) => setText(e.target.value)

    const toogleStatus = false //TODO !!
    const post_id = id ? id : false//TODO !!


    const handlerPost = () => {
        console.log('posts.....')
        console.log(post_id, title, text)
        //dispatch(setPost(title, text))
        // navigate('/')
    }


    return (
        <PostForm
            title={title}
            text={text}
            handlerTitle={handlerTitle}
            handlerText={handlerText}
            handlerPost={handlerPost}
            toogleStatus={toogleStatus}
        />
    )
}

export default PostFormContainer