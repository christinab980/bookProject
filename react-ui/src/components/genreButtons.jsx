import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setGenreRecommendations } from "../features/genreTable";
import { setFavorite } from '../features/favoritesSlice';
import { username } from '../features/usernameSlice';

const Genre = () => {
    let [genres, setGenres] = useState('');
    const [isActive, setIsActive] = useState([]);

    let books = 'books';
    let _username = useSelector(username);


    let dispatch = useDispatch();


    function handleSubmit() {
        // commenting out line 14 as there are ways to utilize the favorites slice for genre recomms, we can reinstate it later when we find a need
        // dispatch(setGenreRecommendations(category))
        dispatch(setGenreRecommendations(genres));
        fetch('https://book-project-ecru.vercel.app/api/setFavoriteGenres', {
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

    function handleGenre (clickedGenre) {
            let genreArray = genres.split(" ");
        
            let indexFound = isActive.indexOf(clickedGenre)

            if(indexFound === -1 && isActive.length < 3) {
                setIsActive([...isActive, clickedGenre])
                genreArray.push(clickedGenre)
                let newGenres = genreArray.join(" ")
                setGenres(newGenres)
            } else {
                //filterActive will work for isActive and Genres array 
                let filterActive = isActive.filter( genre => genre !== clickedGenre )
                setIsActive(filterActive)
                let newGenres = filterActive.join(" ")
                setGenres(newGenres)
            }
    }

    return (
        <>
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
                    onClick={() => handleGenre("nonFiction")} 
                    className={isActive.includes("nonFiction") ? "active" : " "}
                    data-attribute="nonFiction">
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
                    onClick={() => handleGenre("youngAdults")} 
                    className={isActive.includes("youngAdults") ? "active" : " "}
                    data-attribute="youngAdults">
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
                    onClick={() => handleGenre("advice")} 
                    className={isActive.includes("advice") ? "active" : " "}
                    data-attribute="advice">
                        Advice
                </button>
                <button 
                    onClick={() => handleGenre("foodAndFitness")} 
                    className={isActive.includes("foodAndFitness") ? "active" : " "}
                    data-attribute="foodAndFitness">
                        Food and Fitness
                </button>
                <button 
                    onClick= {handleGenre} 
                    data-attribute="humor">
                        Humor
                </button>
            </div>
            <div className='modal-button'>
                <button 
                    onClick={handleSubmit}
                    >
                    Submit
                </button>
            </div>
        </>
    )
}

export default Genre;