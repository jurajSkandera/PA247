import React from 'react'
import Username from './Username'
import Avatar from './Avatar'
import {DELETE_MESSAGE, SEND_MESSAGE} from "../constants/ActionTypes";
import connect from "react-redux/es/connect/connect";
import {MessageComponent} from "./Message";
import SendMessageForm from "./SendMessageForm";
import MessageListComponent from "./MessageList";

class MessagingComponent extends React.Component {


    render() {
        return (

            <div className='messaging'>
                <MessageListComponent avatar={this.props.avatar} username={this.props.username} messages={this.props.messages} deleteMessage={this.props.deleteMessage}></MessageListComponent>
                <SendMessageForm  avatar={this.props.avatar}
                                  sendMessage={this.props.sendMessage}
                                   disabled={this.props.currentRoomId ? true : false}></SendMessageForm>
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch) => ({

    deleteMessage: (mess_id, currentRoomId) =>
        dispatch({type : DELETE_MESSAGE, mess_id : mess_id}),
    sendMessage: (value) =>
        dispatch({type : SEND_MESSAGE, value : value })
});

const mapStateToProps = (state) => ({
    messages : state.messages,
});
export default MessagingComponent