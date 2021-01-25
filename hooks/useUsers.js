import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const useUsers = () => {

    const [users, setUsers] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const getProducts = () => {
            firebase.db.collection('users').onSnapshot(handleSnapshot)
        }
        getProducts();
    }, []);

    function handleSnapshot(snapshot) {
        const users = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        setUsers(users);
    }

    return {
        users
    }
}

export default useUsers;
