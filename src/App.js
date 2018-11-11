import React, { Component } from 'react';
import './App.css';
import RoomList from './Components/RoomList';
import MessageList from './Components/MessageList';
import AddRoomForm from './Components/AddRoomForm';
import SendMessageForm from './Components/SendMessageForm';
import MessagingComponent from './Components/Messaging';
import Profile from './Components/Profile'
import uuidv1 from  'uuid/v1';
import {CHANGE_USERNAME, CHANGE_AVATAR, ADD_ROOM, ENTER_ROOM} from "./constants/ActionTypes";
import connect from "react-redux/es/connect/connect";

class App extends Component {



  componentDidMount()
  {
        const user_id = uuidv1()
        this.setState({
            user_id,
        })

  }



    enterRoom(value)
    {

        this.setState((oldState) => ({
                currentRoomId: value,
            }
        )
        );
    }
    deleteMessage(id)
    {
        const index = this.state.joinableRooms.findIndex((e) => e.id == this.state.currentRoomId)
        const messages = this.state.messages[index]
        const message_index=messages.findIndex((e) => e.mess_id == id)
        messages.splice(message_index, 1)

        const all_messages = this.state.messages
        if (messages.length == 0) {
            all_messages.splice(index, 1)
        }
        this.setState(
            {
                messages : all_messages,
            }
        )

    }


  render() {
    return (
     <div className="ChatApp">
         <Profile confirmUsername={this.props.confirmUsername} username={this.props.username} confirmAvatar={this.props.confirmAvatar} avatar={this.props.avatar}></Profile>
         <RoomList currentRoomId={this.props.currentRoomId} rooms={this.props.joinableRooms} enterRoom={this.enterRoom}></RoomList>
         <AddRoomForm onSubmit={this.addRoom}></AddRoomForm>
         <MessagingComponent disabled={!this.props.currentRoomId} currentRoomId={this.props.currentRoomId} avatar={this.props.avatar} username={this.props.username} joinableRooms={this.props.joinableRooms}></MessagingComponent>
     </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({

    confirmAvatar: payload =>
        dispatch({type : CHANGE_AVATAR}),
    confirmUsername: payload =>
        dispatch({type : CHANGE_USERNAME}),
    addRoom: payload =>
        dispatch({type : ADD_ROOM}),
    enterRoom: payload =>
        dispatch({type: ENTER_ROOM}),
});

const mapStateToProps = (state) => ({
    currentRoomId : state.currentRoomId,
    joinableRooms : state.joinableRooms,
    username : state.username,
    room_counter : state.room_counter,
    user_id : state.user_id,
    avatar : state.avatar,
});


export default connect(mapStateToProps, mapDispatchToProps)(App)
export  {App};
