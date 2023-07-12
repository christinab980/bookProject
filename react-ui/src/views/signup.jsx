import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState();
    const [username, setUser] = useState();
    const [password, setPass] = useState();
    const [email, setEmail] = useState();
    const [birthday, setBirthday] = useState();
    
    const clearUseState = () => {
        setName('');
        setBirthday('');
        setEmail('');
        setUser('');
        setPass('');
    }

    const handleName = e => {
        setAttemptedName(e.target.value)
    }

    const handleUsername = e => {
        setAttemptedUser(e.target.value)
    }

    const handlePassword = e => {
        setAttemptedPass(e.target.value)
    }

    const handleEmail = e => {
        setAttemptedEmail(e.target.value)
    }

    const handleBday = e => {
        setAttemptedBday(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // TODO fix the JSON formatting for the body after full link up
            body: JSON.stringify(name, username, email, password, birthday)
        })
        .then((response) => response.json())
        .then((result) => {
            dispatch(addUsernameToStore(result.username));
            location.href(result.redirectTo)
        })
        clearUseState();
    }
    return (
        <>
            <h3>Create an Account</h3>
            <form>
                <input type='text' placeholder="Name" id='name' value={name} onChange={handleName}/>
                <input type='text' placeholder='Username' id='username' value={username} onChange={handleUsername}/>
                <input type='text' placeholder='Email' id='email' value={email} onChange={handleEmail} />
                <input type='text' placeholder="Password"id='password' value={password} onChange={handlePassword}/>
                <input type='text' placeholder='Birthday' id='birthday' value={birthday} onChange={handleBday}/>
                <button type='submit' id='submitBtn' onClick={handleSubmit}>Submit</button> 
            </form>
        </>
    )
};

export default SignUp;
