import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setGenreRecommendations } from "../features/genreTable";
import { setFavorite } from '../features/favoritesSlice';
import { username } from '../features/usernameSlice';

const Genre = () => {
    let [genres, setGenres] = useState('');
    let books = 'books';
    let _username = useSelector(username);

    let dispatch = useDispatch()

    function handleSubmit() {
        // commenting out line 14 as there are ways to utilize the favorites slice for genre recomms, we can reinstate it later when we find a need
        // dispatch(setGenreRecommendations(category))
        dispatch(setFavorite(genres));
        fetch('/api/setFavorites', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({_username, genres, books})
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response.message)
        })
    }

    function handleGenre (e) {
        let category = e.target.getAttribute("data-attribute")
        setGenres(`${genres} ${category}`);
    }
    
    return (
        <>
            <h2 className='y-wrap genre-buttons-heading'>Popular Genres</h2>
            <div className="genre-buttons">
                <button 
                    onClick={handleGenre} 
                    data-attribute="family" 
                    href='genres'>
                        Family
                </button>
                <button 
                    onClick={handleGenre}
                    data-attribute="fiction">
                        Fiction
                </button>
                <button 
                    onClick={handleGenre} 
                    data-attribute="non-fiction">
                        Non-Fiction 
                </button>
                <button 
                    onClick= {handleGenre} 
                     
                    data-attribute="manga">
                        Manga
                </button>
                <button 
                    onClick= {handleGenre} 
                     
                    data-attribute="science">
                        Science
                </button>
                <button 
                    onClick= {handleGenre} 
                     
                    data-attribute="sports">
                        Sports
                </button>
                <button 
                    onClick= {handleGenre} 
                     
                    data-attribute="young-adults">
                        Young Adults
                </button>
                <button 
                    onClick= {handleGenre} 
                     
                    data-attribute="travel">
                        Travel
                </button>
                <button  
                    onClick= {handleGenre} 
                     
                    data-attribute="education">
                        Education
                </button>
                <button 
                    onClick= {handleGenre} 
                     
                    data-attribute="paperback-advice">
                        Advice
                </button>
                <button 
                    onClick= {handleGenre} 
                     
                    data-attribute="food-and-fitness">
                        Food and Fitness
                </button>
                <button 
                    onClick= {handleGenre} 
                     
                    data-attribute="humor">
                        Humor
                </button>
                <button
                    onClick={handleSubmit}
                    data-attribute='submit'>
                        submit
                </button>
            </div>
        </>
    )
}

export default Genre;