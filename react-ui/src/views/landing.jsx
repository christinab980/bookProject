import React from 'react';
import Book from "../components/book"

const Landing = () => {

    return (
        <>
        <div className='hero-image-landing'>
            <div className='hero-text'>
                <h2>Discover books you love!</h2>
                <p>Enter a book you like and we'll provide book recommendations that you'll love.</p>
            </div>
        </div>
        <div className='landing-container'>
            <Book /> 
        </div>
        </>
    )
};

export default Landing;
