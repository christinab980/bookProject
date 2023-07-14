import React from 'react';

const Genre = (action) => {
    return (
        <>
            <h2 className='y-wrap genre-buttons-heading'>Popular Genres</h2>
            <div className="genre-buttons">
                <a href='/genres'>Family</a>
                <a href='/genres'>Fiction</a>
                <a href='/genres'>Non-Fiction</a>
                <a href='/genres'>Manga</a>
                <a href='/genres'>Science</a>
                <a href='/genres'>Sports</a>
                <a href='/genres'>Young Adults</a>
                <a href='/genres'>Travel</a>
                <a href='/genres'>Education</a>
                <a href='/genres'>Advice</a>
                <a href='/genres'>Food and Fitness</a>
                <a href='/genres'>Humor</a>
            </div>
        </>
    )
}

export default Genre;