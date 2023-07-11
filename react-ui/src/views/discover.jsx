import React from 'react';
import Book from "../components/book";

const Discover = () => {
    return (
        <>
            <div className='hero-image-landing'></div>
            <h2 className='discover-heading'> Top 15 Fiction Books this week! </h2>
            <div className='discover-container'>
                <Book />
            </div>
        </>
    )
};

export default Discover;
