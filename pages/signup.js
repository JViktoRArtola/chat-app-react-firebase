import React, {useState} from 'react';
import Layout from "../components/layout/Layout";
import {Error, Form, Input} from "../components/ui/Form";
import useValidation from "../hooks/useValidation";
import validateSignUp from "../validations/validateSignUp";
import firebase from "../firebase";
import Router from "next/router";
import Button from "../components/ui/Button";
import Link from "next/link";

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    password2: ''
}

const SignUp = () => {
    const [error, setError] = useState(false);
    const {values, errors, handleSubmit, handleChange} = useValidation(INITIAL_STATE, validateSignUp, signUp)
    const {name, email, password, password2} = values

    async function signUp() {
        try {
            await firebase.signUp(name, email, password)
            await Router.push('/')
        } catch (e) {
            console.error('Error : ', e)
            setError(e.message)
        }
    }

    return (
        <Layout>
            <div className="joinOuterContainer">
                {error && <Error>{error} </Error>}
                <Form onSubmit={handleSubmit}>
                    <h1 className="heading">Sign Up</h1>
                    <div>
                        <Input id="name" name="name" placeholder="Name" type="text" value={name}
                               onChange={handleChange}/>
                        {errors.name && <Error>{errors.name}</Error>}
                    </div>
                    <div>
                        <Input id="email" name="email" placeholder="Email" type="text" value={email}
                               onChange={handleChange}/>
                        {errors.email && <Error>{errors.email}</Error>}
                    </div>
                    <div>
                        <Input id="password" name="password" placeholder="Password" type="password" value={password}
                               onChange={handleChange}/>
                        {errors.password && <Error>{errors.password}</Error>}
                    </div>
                    <div>
                        <Input id="password2" name="password2" placeholder="Repeat Password" type="password"
                               value={password2} onChange={handleChange}/>
                        {errors.password2 && <Error>{errors.password2}</Error>}
                    </div>
                    <Button type="submit">Sign Up</Button>
                    <h4 style={{color: '#fff'}}>
                       Already registered ? <Link href='/'>Back and Login</Link></h4>
                </Form>
            </div>
        </Layout>
    );
};

export default SignUp;
