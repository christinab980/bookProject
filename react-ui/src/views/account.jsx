import React, { useState } from "react";
import axios from "axios";
import { favesData } from "../features/favoritesSlice";
import { addUsernameToStore } from "../features/usernameSlice";
import { useDispatch, useSelector } from "react-redux";

const Account = () => {
    const dispatch = useDispatch();

    let [userFavorites, setUserFavorite] = useState('');
    let [userName, setUserName] = useState('');
    // let username = res.username;
    
    const sendUsername =  dispatch(addUsernameToStore(userName));
    let faves = useSelector(favesData);
    setUserFavorite(faves);

    return (
        <h1>account</h1>
    )
}

export default Account;
