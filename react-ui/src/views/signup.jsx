import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    const [attemptedName, setAttemptedName] = useState();
    const [attemptedUser, setAttemptedUser] = useState();
    const [attemptedPass, setAttemptedPass] = useState();
    const [attemptedEmail, setAttemptedEmail] = useState();
    const [attemptedBday, setAttemptedBday] = useState();
    
    const clearUseState = () => {
        setAttemptedName('');
        setAttemptedBday('');
        setAttemptedEmail('');
        setAttemptedUser('');
        setAttemptedPass('');
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
            body: JSON.stringify(attemptedName, attemptedUser, attemptedPass, attemptedEmail, attemptedBday)
        })
        .then((response) => response.json())
        .then((result) => {
            dispatch(addUsernameToStore(result.username));
            location.href(result.redirectTo)
        })
    }
    return (
        <h1>Sign Up</h1>
    )
};

export default SignUp;
