import React from 'react'
import {DELETE_BUFFER_ROOM, HANDLE_INPUT_ROOM} from "../constants/ActionTypes";
import connect from "react-redux/es/connect/connect";
import {MessageComponent} from "./Message";


class AddRoomForm extends React.Component{

    handleSubmit(e) {
        e.preventDefault()
        this.props.addRoom(e.target.value)
        this.props.deleteBuffer()
    }

    render()
    {
        return (
            <form className="new-room-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.props.room_name}
                    placeholder="Enter name of the channel"
                    onChange={this.handleInput}/>
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({

    handleInput: payload =>
        dispatch({type : HANDLE_INPUT_ROOM, payload}),
    deleteBuffer: payload =>
        dispatch({type : DELETE_BUFFER_ROOM}),
});

const mapStateToProps = (state) => ({
    room : state.room,
});


export default connect(mapStateToProps, mapDispatchToProps)(AddRoomForm)
export {AddRoomForm}