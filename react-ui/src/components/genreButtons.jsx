import React from 'react';
import { useDispatch } from 'react-redux';
import { setGenreRecommendations } from "../features/genreTable"

const Genre = () => {

    let dispatch = useDispatch()

    function handleGenre(e) {
        let category = e.target.getAttribute("data-attribute")
        dispatch(setGenreRecommendations(category))
        console.log(category)
    }
    
    return (
        <>
            <h2 className='y-wrap genre-buttons-heading'>Popular Genres</h2>
            <div className="genre-buttons">
                <a 
                    onClick={handleGenre} 
                    data-attribute="family" 
                    href='genres'>
                        Family
                </a>
                <a 
                    onClick={handleGenre} 
                    href='/genres' 
                    data-attribute="fiction">
                        Fiction
                </a>
                <a 
                    onClick={handleGenre} 
                    href='/genres' 
                    data-attribute="non-fiction">
                        Non-Fiction 
                </a>
                <a 
                    onClick= {handleGenre} 
                    href='/genres' 
                    data-attribute="manga">
                        Manga
                </a>
                <a 
                    onClick= {handleGenre} 
                    href='/genres' 
                    data-attribute="science">
                        Science
                </a>
                <a 
                    onClick= {handleGenre} 
                    href='/genres' 
                    data-attribute="sports">
                        Sports
                </a>
                <a 
                    onClick= {handleGenre} 
                    href='/genres' 
                    data-attribute="young-adults">
                        Young Adults
                </a>
                <a 
                    onClick= {handleGenre} 
                    href='/genres' 
                    data-attribute="travel">
                        Travel
                </a>
                <a  
                    onClick= {handleGenre} 
                    href='/genres' 
                    data-attribute="education">
                        Education
                </a>
                <a 
                    onClick= {handleGenre} 
                    href='/genres' 
                    data-attribute="paperback-advice">
                        Advice
                </a>
                <a 
                    onClick= {handleGenre} 
                    href='/genres' 
                    data-attribute="food-and-fitness">
                        Food and Fitness
                </a>
                <a 
                    onClick= {handleGenre} 
                    href='/genres' 
                    data-attribute="humor">
                        Humor
                </a>
            </div>
        </>
    )
}

export default Genre;