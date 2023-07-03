import React from 'react';
import { Routes, Route } from "react-router-dom"
import {Discover, Error, Genres, Landing, SignIn, SignUp } from "../views"

const Main = () => {
    return (
        <main className="y-wrap">
            <Routes>
                <Route path="/discover" element={<Discover />} />
                <Route path="/" element={<Landing />} />
                <Route path="/Genres" element={<Genres />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    )
};

export default Main;
