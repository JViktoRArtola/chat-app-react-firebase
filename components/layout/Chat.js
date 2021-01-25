import React, {useContext, useEffect, useState} from 'react';
import useUsers from "../../hooks/useUsers";
import FirebaseContext from "../../firebase/context";
import Messages from "./Messages";
import useOnline from "../../hooks/useOnline";
import Logout from "./Logout";
import {Container, LateralBar, LeftContainer, Text, Title, Touchable} from "../ui/ChatUi";

export const Chat = () => {
    const {users} = useUsers('users');
    const {user, firebase} = useContext(FirebaseContext);
    const [collection, setCollection] = useState(null);
    const [final, setFinal] = useState('');
    const [modal, setModal] = useState(false);
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
        <Container>
            <Logout show={modal} setModal={setModal}/>
            <LateralBar>
                <Title>Contacts</Title>
                <LeftContainer>
                    {users.filter(item => item.email !== user.email).map((item, index) => (
                        <Text key={index}>
                            <Touchable onClick={() => createThread(item.uid)}>
                                {item.status ? <span> 🟢 </span> : <span> 🔴 </span>}
                                {item.name}
                            </Touchable>
                        </Text>
                    ))}
                </LeftContainer>
            </LateralBar>
            {collection && <Messages filter={final} user={user}/>}
        </Container>

    )
};
