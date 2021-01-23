import React, {useState} from "react"
import Router from 'next/router';
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
import Loader from "../components/layout/Spinner";
import {Form, Input, Error} from "../components/ui/Form";
import firebase from "../firebase";
import useValidation from "../hooks/useValidation";
import validateLogin from "../validations/validateLogin";

const INITIAL_STATE = {
    email: '',
    password: ''
}

export default function Home() {
    const [error, setError] = useState(false);
    const {values, errors, handleSubmit, handleChange, handleBlur} = useValidation(INITIAL_STATE, validateLogin, startLogin);
    const {email, password} = values;

    async function startLogin() {
        try {
            await firebase.login(email, password);
            await Router.push('/');
        } catch (error) {
            console.error('Login Error ', error.message);
            setError(error.message);
        }
    }

    return (
        <>
            <Layout>
                <div className="joinOuterContainer">
                    {error && <Error>{error} </Error>}
                    <Loader/>
                    <Form onSubmit={handleSubmit} noValidate>
                        <h1 className="heading">Join</h1>
                        <div>
                            <Input id="email" name="email" placeholder="Email" type="text" value={email}
                                   onChange={handleChange} onBlur={handleBlur}/>
                            {errors.email && <Error>{errors.email}</Error>}
                        </div>
                        <div>
                            <Input id="password" name="password" placeholder="Password" type="password" value={password}
                                   onChange={handleChange} onBlur={handleBlur}/>
                            {errors.password && <Error>{errors.password}</Error>}
                        </div>
                        <Button type="submit">Sign In</Button>
                    </Form>
                </div>
            </Layout>
        </>
    )
}
