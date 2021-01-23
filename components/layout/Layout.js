import React from 'react';
import Head from "next/head";

const Layout = props => {
    return (
        <>
            <Head>
                <title>Chat React</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                      integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
                      crossOrigin="anonymous"/>
            </Head>
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;
