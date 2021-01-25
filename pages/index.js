import React, {useContext, useEffect, useState} from "react"
import Layout from "../components/layout/Layout";
import {Chat} from "../components/layout/Chat";
import Login from "../components/layout/Login";
import FirebaseContext from "../firebase/context";
import Spinner from "../components/layout/Spinner";

export default function Home() {
    const {user} = useContext(FirebaseContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(function () {
            setLoading(false)
        }.bind(this), 2000);
    }, []);

    if (loading) return <Spinner/>
    return (
        <>
            <Layout>
                {!user ? <Login/> : <Chat/>}
            </Layout>
        </>
    )
}
