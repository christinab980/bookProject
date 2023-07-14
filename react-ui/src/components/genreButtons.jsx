import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setGenreRecommendations } from "../features/genreTable"

const Genre = () => {
    const [btnClicked, setBtnClicked] = useState(false);

    let dispatch = useDispatch();

    function handleGenre(e) {
        setBtnClicked(!btnClicked)
        console.log("btn", btnClicked)
        let category = e.target.getAttribute("data-attribute")
        dispatch(setGenreRecommendations(category))
    }
    
    let toggleClassCheck = btnClicked ? "active" : '';

    return (
        <>
            <div className="genre-buttons">
                <button 
                    className={`${toggleClassCheck}`}
                    onClick={handleGenre} 
                    data-attribute="family" >
                        Family
                </button>
                <button
                    className={`${toggleClassCheck}`}
                    onClick={handleGenre} 
                    data-attribute="fiction">
                        Fiction
                </button>
                <button 
                    className={`${toggleClassCheck}`}
                    onClick={handleGenre} 
                    data-attribute="non-fiction">
                        Non-Fiction 
                </button>
                <button
                    className={`${toggleClassCheck}`}
                    onClick= {handleGenre} 
                    data-attribute="manga">
                        Manga
                </button>
                <button 
                    className={`${toggleClassCheck}`}
                    onClick= {handleGenre} 
                    data-attribute="science">
                        Science
                </button>
                <button 
                    className={`${toggleClassCheck}`}
                    onClick= {handleGenre} 
                    data-attribute="sports">
                        Sports
                </button>
                <button 
                    className={`${toggleClassCheck}`}
                    onClick= {handleGenre} 
                    data-attribute="young-adults">
                        Young Adults
                </button>
                <button
                    className={`${toggleClassCheck}`}
                    onClick= {handleGenre} 
                    data-attribute="travel">
                        Travel
                </button>
                <button 
                    className={`${toggleClassCheck}`}
                    onClick= {handleGenre} 
                    data-attribute="education">
                        Education
                </button>
                <button 
                    className={`${toggleClassCheck}`}
                    onClick= {handleGenre} 
                    data-attribute="paperback-advice">
                        Advice
                </button>
                <button 
                    className={`${toggleClassCheck}`}
                    onClick= {handleGenre} 
                    data-attribute="food-and-fitness">
                        Food and Fitness
                </button>
                <button 
                    className={`${toggleClassCheck}`}
                    onClick= {handleGenre} 
                    data-attribute="humor">
                        Humor
                </button>
            </div>
        </>
    )
}

export default Genre;