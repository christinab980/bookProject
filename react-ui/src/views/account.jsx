import React from "react";
import axios from "axios";
import { useState, useSelector } from "react";
import { favesData } from "../features/favoritesSlice";
import { addUsernameToStore } from "../features/usernameSlice";

const Account = () => {
    const dispatch = Dispatch();
    let [userFavorites, setUserFavorite] = useState('');
    let [userName, setUserName] = useState('');
    let username = res.username;
    const sendUsername =  dispatch(addUsernameToStore(userName));
    let faves = useSelector(favesData);
    setUserFavorite(faves);

    return (
        <h1>account</h1>
    )
}

export default Account;
