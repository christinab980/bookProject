import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUsernameToStore } from '../features/usernameSlice';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

        // fetch('https://book-project-ecru.vercel.app/api/signin', {
            fetch('http://localhost:8080/api/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // TODO fix the JSON formatting for the body after full link up
            body: JSON.stringify({username, email, password})
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            dispatch(addUsernameToStore(response.username));
            navigate(response.redirectTo);
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
                        <a className="form-a" href="/sign-up">Create an Account </a>
                    <div className='form-button'>
                        <button type='submit' id='submitBtn' className="submit-button" onClick={handleSubmit}> Submit</button> 
                    </div>
                </form>
            </div>
        </>
    )
};

export default SignIn;
