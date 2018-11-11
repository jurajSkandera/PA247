import React from 'react'
import {DOWNVOTE, HANDLE_INPUT_MESSAGE, DELETE_BUFFER_MESSAGE} from "../constants/ActionTypes";
import connect from "react-redux/es/connect/connect";
import {MessageComponent} from "./Message";

class SendMessageForm extends React.Component {


    handleKeyPress(e) {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            this.props.sendMessage(this.props.message);
            this.props.deleteBuffer();
        }
    }

    render() {
        if (!this.props.disabled) {
            return (
                <form className="send-message-form" onChange={this.handleOnChange} onKeyPress={this.handleKeyPress}>
               <textarea type="text"
                         value={this.props.message}
                         disabled={this.props.disabled}
                         placeholder="Type here...">
                   <input
                   />
               </textarea>
                </form>
            )
        }
        else {
            return (
                <form className="send-message-form" onChange={this.handleInput}>
               <textarea type="text"
                         value={this.props.message}
                         disabled={this.props.disabled}
                         placeholder="Join a room...">
               </textarea>
                </form>
            )
        }
    }

}
const mapDispatchToProps = (dispatch) => ({

    handleInput: payload =>
        dispatch({type : HANDLE_INPUT_MESSAGE, payload}),
    deleteBuffer: payload =>
        dispatch({type : DELETE_BUFFER_MESSAGE}),
});

const mapStateToProps = (state) => ({
    message : state.message,
    disabled : state.disabled,
});


export default connect(mapStateToProps, mapDispatchToProps)(SendMessageForm)
export {SendMessageForm}