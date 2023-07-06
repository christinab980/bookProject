import React from 'react';
import { Routes, Route } from "react-router-dom"
import {Discover, Error, Genres, Landing, SignIn, SignUp, Account } from "../views"

const Main = () => {
    return (
        <main className="y-wrap">
            <Routes>
                <Route path="/discover" element={<Discover />} />
                <Route path="/" element={<Landing />} />
                <Route path="/genres" element={<Genres />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    )
};

export default Main;
