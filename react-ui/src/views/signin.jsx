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

        fetch('/api/signin', {
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
            <div className='form-container'>
                <h3>Login</h3>
                <form >
                    <input 
                        type='text'
                        placeholder='username' 
                        id='username' value={username} 
                        onChange={handleUsername}
                    />
                    <input 
                        type='text' 
                        placeholder='email' 
                        id='email' 
                        value={email} 
                        onChange={handleEmail} 
                    />
                    <input 
                        type='text' 
                        placeholder="password" 
                        id='password' 
                        value={password}
                        onChange={handlePassword}
                    />
                    <div className='form-button'>
                        <button type='submit' id='submitBtn' onClick={handleSubmit}> Submit</button> 
                    </div>
                </form>
            </div>
        </>
    )
};

export default SignIn;
