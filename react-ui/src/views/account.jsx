import React from "react";
import axios from "axios";
import { useState, useSelector } from "react";
import { favesData } from "../features/favoritesSlice";

const Account = () => {
    let [userFavorites, setUserFavorite] = useState('');
    let [userName, setUserName] = useState('');
    let faves = useSelector(favesData);
    setUserFavorite(faves);
}