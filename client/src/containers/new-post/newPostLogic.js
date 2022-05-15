import {useSelector} from "react-redux"
import {
    setName,
    setTitle,
    setPost,
    setUserId,
    setAccessToken,
    setAddStatus
} from "../../../toolkit/actions/new_post_actions/newPostActions"
import {setChangeStatus} from "../../../toolkit/actions/posts_actions/postsActions"
import {setChangeBackStatus} from "../../../toolkit/actions/change_post_actions/changePostActions"
import {changePost} from "../../../toolkit/reducers/change_post_reducer/changePostReducer"
import {setNewPost} from "../../../toolkit/reducers/new_post_reducer/newPostReducer"

export const dispatchSetNameAction = (data, dispatch) => dispatch(setName(data))
export const dispatchSetTitleAction = (data, dispatch) => dispatch(setTitle(data))
export const dispatchSetPostAction = (data, dispatch) => dispatch(setPost(data))
export const dispatchSetUserIdAction = (data, dispatch) => dispatch(setUserId(data))
export const dispatchSetAccessTokenAction = (data, dispatch) => dispatch(setAccessToken(data))
const dispatchSetAddStatusAction = (data, dispatch) => dispatch(setAddStatus(data))
const dispatchSetChangeStatus = (dispatch) => dispatch(setChangeStatus(false))
const dispatchSetChangeBackStatus = (data, dispatch) => dispatch(setChangeBackStatus(data))

export const getStatePostData = () => {
    const name = useSelector(state => state.newPostReducer.name)
    const title = useSelector(state => state.newPostReducer.title)
    const post = useSelector(state => state.newPostReducer.post)
    const userId = useSelector(state => state.newPostReducer.userId)
    // const accessToken = useSelector(state => state.newPostReducer.accessToken)
    const addStatus = useSelector(state => state.newPostReducer.addStatus)
    const changeStatus = useSelector(state => state.getPostsReducer.changeStatus)
    const changePostData = useSelector(state => state.getPostsReducer.changePost)
    const changeBackStatus = useSelector(state => state.changePostReducer.changeBackStatus)
    let id
    changePostData.map(el => id = el._id)
    return {id, name, title, post, addStatus, changeStatus, changePostData, changeBackStatus, userId};//accessToken
}

export const fieldsClearing = (value, dispatch) => {
    return [
        dispatchSetNameAction(value, dispatch),
        dispatchSetTitleAction(value, dispatch),
        dispatchSetPostAction(value, dispatch)
    ]
}

export const checkInput = (name, title, post) => {
    return !(name.length && title.length && post.length >= 1);
}

export const redirectToPosts = (addStatus, navigate, dispatch) => {
    if (addStatus === 200) {
        navigate('/')
        return dispatchSetAddStatusAction(0, dispatch)
    }
}

export const redirectToBack = (changeBackStatus, navigate, dispatch) => {
    if (changeBackStatus === 200) {
        navigate('/')
        return [
            dispatchSetChangeStatus(dispatch),
            dispatchSetChangeBackStatus(0, dispatch)
        ]
    }
}

export const redirectToBackButtonBack = (navigate, dispatch) => {
    navigate('/')
    return dispatchSetChangeStatus(dispatch)
}

export const dataInsertion = (changePostData, dispatch) => {
    let name, title, post
    changePostData.map(el => {
        name = el.name
        title = el.title
        post = el.post
    })
    return [
        dispatchSetNameAction(name, dispatch),
        dispatchSetTitleAction(title, dispatch),
        dispatchSetPostAction(post, dispatch),
    ]
}

export const switchPostChange = (changeStatus, postData) => {
    if (changeStatus) {
        return changePost(postData)
    } else {
        return setNewPost(postData)
    }
}