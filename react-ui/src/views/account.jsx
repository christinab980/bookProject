import React, { useState, useEffect } from "react";
import axios from "axios";
import { setFavorite, favorites } from "../features/favoritesSlice";
import { username } from "../features/usernameSlice";
import { useDispatch, useSelector } from "react-redux";

import Modal from '../components/modal.jsx';


const Account = () => {    
    const dispatch = useDispatch();
    const _username = useSelector(username);
    const _favorites = useSelector(favorites);
    const currentUrl = location.href;
    const url = currentUrl.match(/([^\/]+$)/g)[0];
    
    useEffect(() => {
        if (url === 'account') {
            console.log('hi', _username)
                fetch(`https://book-project-ecru.vercel.app/api/account`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({_username})
                })
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    if (response) {
                    let favorites = response[0].favoritegenres;
                    let favoriteSplit = favorites.split(' ');
                    console.log(response);
                    dispatch(setFavorite(favoriteSplit));

                }

                })
        }
    }, [])
    return (
        <>
            <h1>account</h1>
            {_favorites.length > 0 ? (
                <div>account page</div>
            ):(
                <Modal />
            )}
        </>
        

    )
}

export default Account;
