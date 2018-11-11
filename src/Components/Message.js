import React from 'react'
import PropTypes from "prop-types"
import {DELETE_MESSAGE, DOWNVOTE, UPVOTE} from "../constants/ActionTypes";
import connect from "react-redux/es/connect/connect";


class MessageComponent extends React.Component
{

    render (){
        const disable_down = this.props.disable_down ;
        const disable_up = this.props.disable_up;
        return (
            <div className="message">
                <div className="message-username">{this.props.user}</div>
                <div className="message-text" id="middle-element">{this.props.text}</div>
                <img className="message-avatar" id="left-element" src={this.props.avatar}/>
                <div className="voter">
                    <button onClick={this.props.downvote} disabled={disable_down}>-</button>
                    <button onClick={this.props.upvote} disabled={disable_up}>+</button>
                    <div className="counter">{this.props.counter}</div>
                </div>
                <button class="delete" onClick={this.props.deleteMessage}>
                    X
                </button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({

    upvote: payload =>
        dispatch({type : UPVOTE, payload}),
    downvote: payload =>
        dispatch({type : DOWNVOTE, payload}),
});

const mapStateToProps = (state) => ({
    counter : state.counter,
    disable_up : state.disable_up,
    disable_down : state.disable_down,
    no_vote : state.no_vote,
});


export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent)

export  {MessageComponent}
