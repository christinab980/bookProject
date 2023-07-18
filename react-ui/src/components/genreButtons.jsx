import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setGenreRecommendations } from "../features/genreTable";
import { setFavorite } from '../features/favoritesSlice';
import { username } from '../features/usernameSlice';

const Genre = () => {
    let [genres, setGenres] = useState('');
    const [btnClicked, setBtnClicked] = useState(false);
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

            let indexFound = isActive.indexOf(clickedGenre)

            if(indexFound === -1 && isActive.length < 3) {
                setIsActive([...isActive, clickedGenre])
            } else {
                let filterActive = isActive.filter( genre => genre !== clickedGenre )
                setIsActive(filterActive)
            }
        

            let category = clickedGenre
            setGenres(`${genres} ${category}`);
        
    }
    
    console.log(isActive)

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
                    onClick={() => handleGenre("non-fiction")} 
                    className={isActive.includes("non-fiction") ? "active" : " "}
                    data-attribute="non-fiction">
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
                    onClick={() => handleGenre("young-adults")} 
                    className={isActive.includes("young-adults") ? "active" : " "}
                    data-attribute="young-adults">
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
                    onClick={() => handleGenre("paperback-advice")} 
                    className={isActive.includes("paperback-advice") ? "active" : " "}
                    data-attribute="paperback-advice">
                        Advice
                </button>
                <button 
                    onClick={() => handleGenre("food-and-fitness")} 
                    className={isActive.includes("food-and-fitness") ? "active" : " "}
                    data-attribute="food-and-fitness">
                        Food and Fitness
                </button>
                <button 
                    onClick={() => handleGenre("humor")} 
                    className={isActive.includes("humor") ? "active" : " "}
                    data-attribute="humor">
                        Humor
                </button>
            </div>
        </>
    )
}

export default Genre;