import React, {useEffect} from 'react';
import firebase from '../firebase';

function useOnline(userId) {

    useEffect(() => {


        const uid = firebase.auth.currentUser.uid;

        // Create a reference to this user's specific status node.
        // This is where we will store data about being online/offline.
        const userStatusDatabaseRef = firebase.database.ref('/status/' + uid);

        // We'll create two constants which we will write to
        // the Realtime database when this device is offline
        // or online.
        const isOfflineForDatabase = {
            state: 'offline',
            last_logout: new Date().toLocaleString(),
        };

        const isOnlineForDatabase = {
            state: 'online',
            last_login: new Date().toLocaleString(),
        };

        // Create a reference to the special '.info/connected' path in
        // Realtime Database. This path returns `true` when connected
        // and `false` when disconnected.
        firebase.database.ref('.info/connected').on('value', function (snapshot) {
            // If we're not currently connected, don't do anything.
            // if (snapshot.val() == false) {
            //     return;
            // }

            // If we are currently connected, then use the 'onDisconnect()'
            // method to add a set which will only trigger once this
            // client has disconnected by closing the app,
            // losing internet, or any other means.

            userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function () {
                // The promise returned from .onDisconnect().set() will
                // resolve as soon as the server acknowledges the onDisconnect()
                // request, NOT once we've actually disconnected:
                // https://firebase.google.com/docs/reference/js/firebase.database.OnDisconnect

                firebase.db.collection('users').doc(userId).update({
                    status: true,
                })

                // We can now safely set ourselves as 'online' knowing that the
                // server will mark us as offline once we lose connection.
                userStatusDatabaseRef.set(isOnlineForDatabase);
            });
        });

    }, [userId]);



}

export default useOnline;
