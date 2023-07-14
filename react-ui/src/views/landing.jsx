import React from 'react';
import Book from "../components/book";
import GenreButtons from "../components/genreButtons"
const Landing = () => {

    return (
        <>
        <div className='hero-image-landing'>
            <div className='hero-text'>
                <h2>Discover books you love!</h2>
                <p>Enter a book you like and we'll provide book recommendations that you'll love.</p>
            </div>
        </div>
        <h2 className='y-wrap landing-book-heading'>Top 5 books this week! </h2>
        <div className='landing-container'>
            <Book /> 
        </div>
            <GenreButtons />
        </>
    )
};

export default Landing;
