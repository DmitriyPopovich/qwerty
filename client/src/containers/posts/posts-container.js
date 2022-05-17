import React, {useEffect} from "react";
import Post from "../../components/post";
import {useDispatch, useSelector} from "react-redux";
import {getPostsData} from "../../store/reducers/posts-reducer/selectors/selectors";
import {getPosts} from "../../store/reducers/posts-reducer/posts-reducer";
import {v4} from "uuid";

const PostsContainer = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts())
    },[])
    const posts = useSelector(getPostsData)

    return (
        <>
            {posts?.map(post => <Post key={v4()} post={post}/>)}
        </>
    )
}
export default PostsContainer
