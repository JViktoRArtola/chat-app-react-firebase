import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database'
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
        this.database = app.database();
    }

    // Register a User
    async signUp(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);
        // await this.db.collection('users').add({name, email, status: true, uid: newUser.user.uid});
        await this.db.collection('users').doc(`${newUser.user.uid}`).get()
            .then(doc => {
                    if (!doc.exists) {
                        this.db.collection('users').doc(`${newUser.user.uid}`).set({name, email, status: true, uid: newUser.user.uid})
                    }
                }
            )
        return await newUser.user.updateProfile({
            displayName: name
        })
    }

    // Login in the App
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // LogOut in the App
    async logout() {
        const change = firebase.database.ref('/status/' + this.auth.currentUser.uid)
        await change.set({state: 'offline', last_logout: new Date().toLocaleString()});
        await firebase.db.collection('users').doc(this.auth.currentUser.uid).update({
            status: false,
        })
        await this.auth.signOut();
    }

}

const firebase = new Firebase();
export default firebase;
