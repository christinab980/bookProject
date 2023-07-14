import React, { useState, useEffect } from "react";
import axios from "axios";
import { setFavorite, favorites } from "../features/favoritesSlice";
import { username } from "../features/usernameSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from '../components/modal.jsx';

const Account = () => {    
    const dispatch = useDispatch();
    const _username = useSelector(username);
    const currentUrl = location.href;
    const url = currentUrl.match(/([^\/]+$)/g)[0];
    const [favesLength, setFavesLength] = useState();
    useEffect(() => {
        if (url === 'account') {
            console.log('hi', _username)
                fetch(`/api/account`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({_username})
                })
                .then((response) => response.json())
                .then((response) => {
                    if (response && response.favorites) {
                    let favorites = response.genres.split(',');
                    dispatch(setFavorite(favorites));
                    } else {
                        setFavesLength(0)
                    }
                })
        }
    }, [])
    return (
        <>
            <h1>account</h1>
            {favesLength > 0 ? (
                <div>account page</div>
            ):(
                <Modal />
            )}
        </>
        
    )
}

export default Account;
