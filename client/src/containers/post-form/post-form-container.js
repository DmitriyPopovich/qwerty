import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import PostForm from "../../components/post-form/post-form";
import {useNavigate, useParams} from "react-router-dom";
import {getPost} from "../../store/reducers/posts-reducer/selectors";
import {setNewPost, setText, setTitle} from "../../store/reducers/posts-reducer/posts-reducer";

const PostFormContainer = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {title,text} = useSelector(getPost)
    const handlerTitle = (e) => dispatch(setTitle(e.target.value))
    const handlerText = (e) => dispatch(setText(e.target.value))
    const handlerCreatePost = () => {
        console.log(post_id, title, text)
        dispatch(setNewPost({title, text}))
        navigate('/')
    }


    const toogleStatus = false //TODO !!
    const post_id = id ? id : false//TODO !!


    return (
        <PostForm
            title={title}
            text={text}
            handlerTitle={handlerTitle}
            handlerText={handlerText}
            handlerPost={handlerCreatePost}
            toogleStatus={toogleStatus}
        />
    )
}

export default PostFormContainer