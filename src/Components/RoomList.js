import React from 'react'
import {DELETE_BUFFER, HANDLE_INPUT} from "../constants/ActionTypes";
import connect from "react-redux/es/connect/connect";
import {MessageComponent} from "./Message";

class RoomList extends React.Component
{

    render () {
        const rooms = this.props.rooms;
        if (rooms) {
            return (
                <div className="rooms-list">
                    <h3>Rooms</h3>
                    {}
                    <ul>
                        {rooms.map((room) => {
                            const active = this.props.currentRoomId === room.id ? 'active' : '';
                            return (
                                <li className="channel" key={room.id} className={'room ' + active}>
                                    <a href='#' onClick={() => this.props.enterRoom(room.id)}>
                                        # {room.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        else {
            return(
            <div className="rooms-list">
                <h3>Rooms</h3>
                {}
            </div>
            )
        }
    }

}

export default RoomList