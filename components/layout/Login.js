import React, {useState} from "react"
import Button from "../ui/Button";
import {Form, Input, Error} from "../ui/Form";
import firebase from "../../firebase";
import useValidation from "../../hooks/useValidation";
import validateLogin from "../../validations/validateLogin";
import Link from "next/link";

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
        } catch (error) {
            console.error('Login Error ', error.message);
            setError(error.message);
        }
    }

    return (
        <>
            <div className="joinOuterContainer">
                {error && <Error>{error} </Error>}
                <Form onSubmit={handleSubmit}>
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
                    <h4 style={{color: '#fff'}}>
                        Don't have an account yet? <Link style={{color: '#d71515'}} href='/signup'>Register
                        now</Link></h4>
                </Form>
            </div>
        </>
    )
}