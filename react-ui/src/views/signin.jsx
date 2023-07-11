import React from 'react';
import { useState } from 'react';
import { username } from '../features/usernameSlice';
import { useDispatch } from 'react-redux';
import { addUsernameToStore } from '../features/usernameSlice';

const SignIn = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsername = e => {
        setUsername(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // TODO fix the JSON formatting for the body after full link up
            body: JSON.stringify(username, email, password)
        })
        .then((response) => response.json())
        .then((result) => {
            dispatch(addUsernameToStore(result.username));
            location.href(result.redirectTo)
        })
        setUsername('');
        setEmail('');
        setPassword('');
    }
    
    return (
        <>
            <h1>Sign-In</h1>
            <form>
                <input type='text' id='username' value={username} onChange={handleUsername}/>
                <input type='text' id='email' value={email} onChange={handleEmail} />
                <input type='text' id='password' value={password} onChange={handlePassword}/>
                <button type='submit' id='submitBtn' onClick={handleSubmit}/> 
            </form>
        </>
    )
};

export default SignIn;
