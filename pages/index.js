import React, {useContext} from "react"
import Layout from "../components/layout/Layout";
import {Chat} from "../components/layout/Chat";
import Login from "../components/layout/Login";
import FirebaseContext from "../firebase/context";

export default function Home() {
    const {user} = useContext(FirebaseContext);

    return (
        <>
            <Layout>
                {!user ? <Login/> : <Chat/>}
            </Layout>
        </>
    )
}
