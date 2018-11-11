import React from 'react'
import {USERNAME_ENTER, CLEAR_BUFFER_USERNAME, EDIT_USERNAME} from "../constants/ActionTypes";
import connect from "react-redux/es/connect/connect";
import {MessageComponent} from "./Message";

class UsernameComponent extends React.Component
{

    handleClick(e)
    {
        this.setState({
            clicked : !this.state.clicked
        })
    }
    handleChange(e)
    {
        this.setState({
            username: e.target.value
        })

    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.confirmUsername(this.state.username_buffer)
        this.props.clearBufferUsername()
    }
    render () {
        if (!this.props.clicked) {
            return (
                    <button className="button-username" onClick={this.props.enterUsername}>{this.props.username}</button>
            )
        }
        else
        {
            return (
                     <form onSubmit={this.confirmUsername(this.props.username_buffer)}>
                        <input className="button-username" placeholder="Enter new username" onChange={this.usernameBuffering} autoFocus></input>
                    </form>

            )
        }

    }
}
const mapDispatchToProps = (dispatch) => ({

    enterUsername: payload =>
        dispatch({type : USERNAME_ENTER}),
    usernameBuffering: payload =>
        dispatch({type : EDIT_USERNAME}),
    clearBufferUsername: payload =>
        dispatch({type : CLEAR_BUFFER_USERNAME})

});

const mapStateToProps = (state) => ({
    clicked : state.clicked,
    username_buffer : state.username_buffer,
});


export default connect(mapStateToProps, mapDispatchToProps)(UsernameComponent)

export  {UsernameComponent}
