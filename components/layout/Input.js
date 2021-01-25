import React, {useContext, useState} from 'react';
import styles from '../../styles/Input.module.css'
import FirebaseContext from "../../firebase/context";


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
        <div style={{position: 'absolute', bottom: 20, width: '82%',}}>
            <input
                className={styles.input}
                type="text"
                placeholder="Type a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? f() : null}
            />
            <button type='submit' className={styles.sendButton} onClick={() => f()}>
                Send
            </button>
        </div>
    )
}
