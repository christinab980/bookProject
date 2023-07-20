import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUsernameToStore } from '../features/usernameSlice';
import { selectIsLoggedIn, verifyAuth } from '../features/isloggedInSlice';

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/account');
        }
    }, [isLoggedIn]);

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
        // dispatch(addUsernameToStore(response.username));
        dispatch(verifyAuth({username, email, password}));
        //navigate(response.redirectTo);

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
