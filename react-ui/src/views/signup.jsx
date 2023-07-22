import React from 'react';
import { useState } from 'react';
import { addUsernameToStore } from '../features/usernameSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let location = useNavigate();
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

        fetch('http://localhost:8080/api/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
            },
            // TODO fix the JSON formatting for the body after full link up
            body: JSON.stringify({name, username, email, password, birthday})
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            dispatch(addUsernameToStore(response.username));
            location(response.redirectTo);
        })
        clearUseState();
    }
    //erasing the value for the inputs as it throws an error
    return (
        <>
            <div className='form-container'>
                <h3>Create an Account</h3>
                <form>
                    <input 
                        type='text' 
                        placeholder="Name" 
                        id='name'  
                        onChange={handleName}
                    />
                    <input 
                        type='text' 
                        placeholder='Username' 
                        id='username' 
                        onChange={handleUsername}
                    />
                    <input 
                        type='text' 
                        placeholder='Email' 
                        id='email' 
                        onChange={handleEmail} 
                    />
                    <input 
                        type='password' 
                        placeholder="Password"
                        id='password' 
                        onChange={handlePassword}
                    />
                    <input 
                        type='text' 
                        placeholder='Birthday' 
                        id='birthday' 
                        onChange={handleBday}
                    />
                    <div className='form-button'>
                        <button type='submit' id='submitBtn' onClick={handleSubmit}>Submit</button> 
                    </div>
                </form>
            </div>
        </>
    )
};

export default SignUp;
