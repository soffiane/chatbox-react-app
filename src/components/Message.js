import React, { Component } from 'react';

class Message extends Component {

    render() {
        const { pseudo, message, isCurrentUser } = this.props
        if (isCurrentUser(pseudo)) {
            return (
                <p className="user-message">
                    {message}
                </p>
            )
        } else {
            return (
                <p className="not-user-message">
                    <strong>{pseudo}: </strong>{message}
                </p>
            )
        }
    }
}

export default Message;