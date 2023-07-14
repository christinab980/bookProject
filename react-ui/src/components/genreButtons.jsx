import React from 'react';
import { useDispatch } from 'react-redux';
import { setGenreRecommendations } from "../features/genreTable";
import { setFavorite } from '../features/favoritesSlice';
import { username } from '../features/usernameSlice';

const Genre = () => {
    let [genres, setGenres] = useState('');
    let books = 'books';

    let dispatch = useDispatch()

    function handleSubmit() {
        // commenting out line 14 as there are ways to utilize the favorites slice for genre recomms, we can reinstate it later when we find a need
        // dispatch(setGenreRecommendations(category))
        dispatch(setFavorite(favorites));
        fetch('/api/setFavorites', {
            method: "POST",
            headers: "application/json",
            body: JSON.stringify({username, genres, books})
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response.message)
        })
        console.log(category)
    }

    function handleGenre (e) {
        let category = e.target.getAttribute("data-attribute")
        setGenres(category);
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