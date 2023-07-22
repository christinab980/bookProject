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
    }

    function handleGenre (clickedGenre) {
            let genreArray =[...genres];
        
            let indexFound = isActive.indexOf(clickedGenre)

            if(indexFound === -1 && isActive.length < 3) {
                setIsActive([...isActive, clickedGenre])
                genreArray.push(clickedGenre)
                // let newGenres = genreArray.join(" ")
                setGenres(genreArray)
            } else {
                //filterActive will work for isActive and Genres array 
                let filterActive = isActive.filter( genre => genre !== clickedGenre )
                setIsActive(filterActive)
                // let newGenres = filterActive.join(" ")
                setGenres(filterActive)
            }
    }

    return (
        <>
            <div className="genre-buttons">
                <button 
                    onClick={() => handleGenre("family")} 
                    className={isActive.includes("family") ? "active" : " "}
                    data-attribute="family" 
                    href='genres'>
                        Family
                </button>
                <button 
                    onClick={() => handleGenre("fiction")} 
                    className={isActive.includes("fiction") ? "active" : " "}
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
                    onClick={() => handleGenre("manga")}  
                    className={isActive.includes("manga") ? "active" : " "}
                    data-attribute="manga">
                        Manga
                </button>
                <button 
                    onClick={() => handleGenre("science")} 
                    className={isActive.includes("science") ? "active" : " "}
                    data-attribute="science">
                        Science
                </button>
                <button 
                    onClick={() => handleGenre("sports")} 
                    className={isActive.includes("sports") ? "active" : " "}
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
                    onClick={() => handleGenre("travel")} 
                    className={isActive.includes("travel") ? "active" : " "}
                    data-attribute="travel">
                        Travel
                </button>
                <button  
                    onClick={() => handleGenre("education")} 
                    className={isActive.includes("education") ? "active" : " "}
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
                    onClick={() => handleGenre("humor")} 
                    className={isActive.includes("humor") ? "active" : " "}
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