import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import PostForm from "../../components/post-form/post-form";



const PostFormContainer = ({id}) => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const handlerTitle = (e) => setTitle(e.target.value)
    const handlerText = (e) => setText(e.target.value)
    const handlerPost = () => {
        console.log('posts.....')
        // dispatch(setPost(title, text))
        setTitle('')
        setText('')
    }
    const toogleStatus = false //TODO !!
    const post_id = id //TODO !!

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