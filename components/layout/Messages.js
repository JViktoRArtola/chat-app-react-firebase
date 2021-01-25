import React, {useEffect} from 'react';
import Message from "./Message";
import {Input} from "./Input";
import useMessages from "../../hooks/useMessages";

const Messages = ({filter, user}) => {
    const {messages} = useMessages('date', filter)
    useEffect(() => {
        const objDiv = document.getElementById("scrollable");
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [messages]);

    return (
        messages ?
            <div id='scrollable' style={{height: '88vh', overflowY: 'scroll', padding: '2% 0'}}>
                <div >
                    {messages.filter(item => item.id !== 'Status').map((message, i) =>
                        <Message key={i} message={message.text} owner={message.uid} user={user.uid} date={message.date}/>
                    )}
                </div>
                <Input filter={filter} uid={user.uid}/>
            </div> :
           null
    );
};

export default Messages;
