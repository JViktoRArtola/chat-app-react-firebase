import React, {useEffect} from 'react';
import Message from "./Message";
import {Input} from "./Input";
import useMessages from "../../hooks/useMessages";
import styled from "styled-components";

export const Scrollable = styled.div`
   height: 88vh;
   overflow-y: scroll;
   padding: 2% 0;
`;

const Messages = ({filter, user}) => {
    const {messages} = useMessages('date', filter)
    useEffect(() => {
        const objDiv = document.getElementById("scrollable");
        objDiv.scrollTop = objDiv.scrollHeight;
    }, [messages]);

    return (
        messages ?
            <Scrollable id='scrollable'>
                {messages.filter(item => item.id !== 'Status').map((message, i) =>
                    <Message key={i} message={message.text} owner={message.uid} user={user.uid} date={message.date}/>
                )}
                <Input filter={filter} uid={user.uid}/>
            </Scrollable> :
            null
    );
};

export default Messages;
