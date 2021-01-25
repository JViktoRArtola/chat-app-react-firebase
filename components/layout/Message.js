import React from 'react';
import {
    MessageBoxBlue,
    MessageBoxLight,
    MessageContainerLeft,
    MessageContainerRight,
    MessageTextDark,
    MessageTextWhite,
    TimeLeft,
    TimeRight
} from "../ui/MessageUi";

const Message = ({owner, user, message, date}) => {
    const humanDate = new Date(date.seconds * 1000).toLocaleString()
    return (
        <>
            {user === owner
                ? (
                    <MessageContainerRight>
                        <TimeRight>{humanDate}</TimeRight>
                        <MessageBoxBlue>
                            <MessageTextWhite>{message}</MessageTextWhite>
                        </MessageBoxBlue>
                    </MessageContainerRight>
                )
                : (
                    <MessageContainerLeft>
                        <MessageBoxLight>
                            <MessageTextDark>{message}</MessageTextDark>
                        </MessageBoxLight>
                        <TimeLeft>{humanDate}</TimeLeft>
                    </MessageContainerLeft>
                )
            }
        </>
    );
};

export default Message;
