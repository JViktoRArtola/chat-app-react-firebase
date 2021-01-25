import React, {useContext, useState} from 'react';
import FirebaseContext from "../../firebase/context";
import {Button, Container, InputText} from "../ui/InputUi";


export const Input = ({filter, uid}) => {
    const [text, setText] = useState('');
    const {firebase} = useContext(FirebaseContext);

    function f() {
        const msg = {
            text,
            date: new Date(),
            uid: uid
        }
        firebase.db.collection(filter).add(msg);
        setText('')
    }

    return (
        <Container>
            <InputText
                type="text"
                placeholder="Type a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? f() : null}
            />
            <Button type='submit' onClick={() => f()}>
                Send
            </Button>
        </Container>
    )
}
