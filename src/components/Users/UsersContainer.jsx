import {connect} from 'react-redux';
import {
    follow, requestUsers, onPage,
    unfollow
} from '../../redux/users-reducer';
import React, {useEffect} from 'react';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalItemsCount,
    getUsers
} from "../../redux/users-selectors";
import {compose} from "redux";
import {withAuthNavigate} from "../../hoc/withAuthRedirect";


let UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    },  [props.currentPage, props.pageSize])

    let onPageChanged = (pageNumber) => {
        props.onPage(pageNumber, props.pageSize) // pageNumber - номер текущей страницы, props.pageSize - кол-во юзеров 5 или 10
    }

        return (
            <>
                { props.isFetching ? <Preloader />  : null}
                <Users users={props.users}
                       pageSize={props.pageSize}
                       totalItemsCount={props.totalItemsCount}
                       currentPage={props.currentPage}
                       onPageChanged={onPageChanged}
                       follow={props.follow}
                       unfollow={props.unfollow}
                       followingInProgress={props.followingInProgress}
                />
            </>
        );
}

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,{follow, unfollow, getUsers: requestUsers, onPage}), // в mapDispatchToProps лежат action creator
    withAuthNavigate
)(UsersContainer)