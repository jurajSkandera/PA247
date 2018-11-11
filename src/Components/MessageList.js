import React from 'react';
import MessageComponent from './Message';
import {DELETE_MESSAGE, DOWNVOTE, UPVOTE} from "../constants/ActionTypes";
import connect from "react-redux/es/connect/connect";

class MessageListComponent extends React.Component{

    render() {
        if (!this.props.currentRoomId || this.props.messages === []) {
            return (
                <div className="message-list">
                    <div className="join-room">
                        &larr; Join a room!
                    </div>
                </div>
            )
        }
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return <MessageComponent key={index}
                                             mess_id={message.mess_id}
                                             user={this.props.username}
                                             text={message.value}
                                             avatar={this.props.avatar}
                                             onDelete={this.props.deleteMessage(message.mess_id, this.props.currentRoomId)}/>
                })}
            </div>
        )
    }

}
export default MessageListComponent