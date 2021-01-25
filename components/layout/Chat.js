import React, {useContext, useEffect, useState} from 'react';
import useUsers from "../../hooks/useUsers";
import FirebaseContext from "../../firebase/context";
import styles from '../../styles/Chat.module.css'
import Messages from "./Messages";
import useOnline from "../../hooks/useOnline";

export const Chat = () => {
    const {users} = useUsers('users');
    const {user, firebase} = useContext(FirebaseContext);
    const [collection, setCollection] = useState(null);
    const [final, setFinal] = useState('');
    useOnline(user.uid)

    useEffect(() => {
        window.addEventListener("beforeunload", (ev) => {
            firebase.db.collection('users').doc(user.uid).update({
                status: false,
            })
        });
    }, []);


    async function createThread(user2) {
        const thread = {
            date: new Date(),
        }
        firebase.db.collection(`${user2}%${user.uid}`).doc('Status').get()
            .then(doc => {
                if (!doc.exists) {
                    firebase.db.collection(`${user.uid}%${user2}`).doc('Status').set(thread);
                    setFinal(`${user.uid}%${user2}`)
                    setCollection(true)
                    console.log('No such document!');
                } else {
                    firebase.db.collection(`${user2}%${user.uid}`).doc('Status').set(thread);
                    setFinal(`${user2}%${user.uid}`)
                    setCollection(true)
                    console.log('Document data:', doc.data());
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }

    return (
        <div className={styles.container}>
            <div className={styles.out}>
                <button className={styles.button} onClick={() => firebase.logout()}>Salir</button>
            </div>
            <div className={styles.lateral}>
                <h2 className={styles.title}>Contacts</h2>
                <div className={styles.leftContainer}>
                    {users.filter(item => item.email !== user.email).map((item, index) => (
                        <p className={styles.text} key={index}>
                            <button className={styles.touchable} onClick={() => createThread(item.uid)}>
                                {item.status ? <span> 🟢 </span> : <span> 🔴 </span>}
                                {item.name}
                            </button>
                        </p>
                    ))}
                </div>
            </div>
            {collection && <Messages filter={final} user={user}/>}
        </div>

    )
};
