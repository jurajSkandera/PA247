import React from 'react'
import Username from './Username'
import Avatar from './Avatar'
import {DOWNVOTE, UPVOTE} from "../constants/ActionTypes";
import connect from "react-redux/es/connect/connect";
import {MessageComponent} from "./Message";
class Profile extends React.Component {


    render() {
        return (

        <div className="profile">
            <Avatar confirmAvatar={this.props.confirmAvatar} avatar={this.props.avatar}></Avatar>
            <Username confirmUsername={this.props.confirmUsername} username={this.props.username}></Username>
        </div>
        )
    }

}

export  default Profile