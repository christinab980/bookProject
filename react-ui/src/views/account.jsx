import React, { useState, useEffect } from "react";
import axios from "axios";
import { setFavorite, favorites } from "../features/favoritesSlice";
import { username } from "../features/usernameSlice";
import { useDispatch, useSelector } from "react-redux";
import GenreBook from "../components/genreBook";


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
                // fetch(`https://book-project-ecru.vercel.app/api/account`, 
                fetch(`http://localhost:8080/api/account`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({_username})
                })
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    if (response) {
                    let favorites = response.favoritegenres;
                    let favoriteSplit = favorites.split(' ');
                    dispatch(setFavorite(favoriteSplit));
                }

                })
        }
    }, [])
    return (
        <>
            {_favorites.length > 0 ? (
                <div className="account-container">
                    <div className='hero-image-account'>
                        <div className='hero-text'>
                            <h2>Account</h2>
                            <p>Browse YOUR favorite books!</p>
                        </div>
                    </div>
                    <div className="welcome-heading"> Hi {_username} </div>
                    <div>
                        <h2 className="account-headings">Recommended Books</h2>
                        <div className="recommended-books">
                            <GenreBook />
                        </div>
                    </div> 
                    <div>
                        <h2 className="account-headings">Favorite Books</h2>
                    </div> 
                </div>
            ):
            (
                <Modal />
            )
            }
        </>
        

    )
}

export default Account;
