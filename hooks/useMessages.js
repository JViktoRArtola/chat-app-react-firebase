import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const useMessages = (order, filter) => {
    const [messages, setMessages] = useState([]);
    const { firebase } = useContext(FirebaseContext);
    useEffect(() => {
        const getProducts = () => {
            firebase.db.collection(filter).orderBy(order, 'asc').onSnapshot(handleSnapshot)
        }
        getProducts();
    }, [filter]);

    function handleSnapshot(snapshot) {
        const msg = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        setMessages(msg);
    }

    return {
        messages
    }
}

export default useMessages;
