import React from 'react';
import { useState } from 'react';
import { addUsernameToStore } from '../features/usernameSlice';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SignUp = () => {
    let location = useLocation();
    const { pathname } = location;
    const [name, setName] = useState();
    const [username, setUser] = useState();
    const [password, setPass] = useState();
    const [email, setEmail] = useState();
    const [birthday, setBirthday] = useState();
    const dispatch = useDispatch();
    
    const clearUseState = () => {
        setName('');
        setBirthday('');
        setEmail('');
        setUser('');
        setPass('');
    }

    const handleName = e => {
        setName(e.target.value)
    }

    const handleUsername = e => {
        setUser(e.target.value)
    }

    const handlePassword = e => {
        setPass(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleBday = e => {
        setBirthday(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('/api/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // TODO fix the JSON formatting for the body after full link up
            body: JSON.stringify({name, username, email, password, birthday})
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            dispatch(addUsernameToStore(response.username));
            pathname.replace(response.redirectTo);
        })
        clearUseState();
    }
    return (
        <>
            <h1>Sign Up</h1>
            <form>
                <input type='text' id='name' value={name} onChange={handleName}/>
                <input type='text' id='username' value={username} onChange={handleUsername}/>
                <input type='text' id='email' value={email} onChange={handleEmail} />
                <input type='text' id='password' value={password} onChange={handlePassword}/>
                <input type='text' id='birthday' value={birthday} onChange={handleBday}/>
                <button type='submit' id='submitBtn' onClick={handleSubmit}/> 
            </form>
        </>
    )
};

export default SignUp;
