import React from 'react'
import {addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const ContainerDataPosts = (props) => {

    return (
        <MyPostsContainer profile={props.profile} />
    )
}

let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (NewPostBody) => {
            dispatch(addPostActionCreator(NewPostBody))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default ContainerDataPosts;