import React from 'react'
import {AVATAR_ENTER} from "../constants/ActionTypes";
import connect from "react-redux/es/connect/connect";
import {MessageComponent} from "./Message";

class AvatarComponent extends React.Component
{



    render () {
        if (!this.props.avatar_clicked) {
            return (
                    <input type="image" src={this.props.avatar} className="button-avatar" onClick={this.props.changeAvatar}>
                    </input>
            )
        }
        else
        {
            return (
                <form onChange={this.props.confirmAvatar}>
                    <input type="file" autoFocus/>
                </form>
            )
        }

    }
}
const mapDispatchToProps = (dispatch) => ({

    changeAvatar: payload =>
        dispatch({type : AVATAR_ENTER}),
});

const mapStateToProps = (state) => ({
    avatar_clicked : state.avatar_clicked,
});


export default connect(mapStateToProps, mapDispatchToProps)(AvatarComponent)

export  {AvatarComponent}

