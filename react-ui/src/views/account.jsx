import React, { useState, useEffect } from "react";
import axios from "axios";
import { setFavorite } from "../features/favoritesSlice";
import { username } from "../features/usernameSlice";
import { useDispatch, useSelector } from "react-redux";

const Account = () => {
    const dispatch = useDispatch();
    const currentUrl = location.href;
    console.log('currentUrl');
    const url = currentUrl.match(/([^\/]+$)/g)[0];
    useEffect(() => {
        if (url === 'account') {
            const findFaves = () => {
                fetch(`${currentUrl}/api/favoriteGenres`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(username)
                })
                .then((response) => response.json())
                .then((result) => {
                    let favorites = result.genres.split(',');
                    dispatch(setFavorite(favorites));
                })

            }
        }
    }, [])
    const findFaves = () => {
        const search = fetch()
    }

    let [userFavorites, setUserFavorite] = useState('');
    let faves = useSelector(setFavorite);
    setUserFavorite(faves);
    
    return (
        <h1>account</h1>
    )
}

export default Account;
