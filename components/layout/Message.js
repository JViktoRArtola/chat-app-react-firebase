import React from 'react';

const Message = ({owner, user, message, date}) => {
    const humanDate = new Date(date.seconds * 1000).toLocaleString()
    return (
        <div>
            {user === owner
                ? (
                    <div className="messageContainer justifyEnd">
                        <p className="sentText pr-10">{humanDate}</p>
                        <div className="messageBox backgroundBlue">
                            <p className="messageText colorWhite">{message}</p>
                        </div>
                    </div>
                )
                : (
                    <div className="messageContainer justifyStart">
                        <div className="messageBox backgroundLight">
                            <p className="messageText colorDark">{message}</p>
                        </div>
                        <p className="sentText pl-10">{humanDate}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Message;
