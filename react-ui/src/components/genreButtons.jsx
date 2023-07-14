import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setGenreRecommendations } from "../features/genreTable"

const Genre = () => {
    const [btnClicked, setBtnClicked] = useState(false);
    const [isActive, setIsActive] = useState("")

    let dispatch = useDispatch();

    function handleGenre(clickedGenre) {
        setBtnClicked(true)
        setIsActive(clickedGenre)

        let category = clickedGenre
        dispatch(setGenreRecommendations(category))
        console.log(isActive)
    }
    

    return (
        <>
            <div className="genre-buttons">
                <button 
                    onClick={() => handleGenre("family")} 
                    className={isActive === "family" ? "active" : " "}
                    data-attribute="family" >
                        Family
                </button>
                <button
                    onClick={() => handleGenre("fiction")} 
                    className={isActive === "fiction" ? "active" : " "}
                    data-attribute="fiction">
                        Fiction
                </button>
                <button 
                    onClick={() => handleGenre("non-fiction")} 
                    className={isActive === "non-fiction" ? "active" : " "}
                    data-attribute="non-fiction">
                        Non-Fiction 
                </button>
                <button
                    onClick={() => handleGenre("manga")} 
                    className={isActive === "manga" ? "active" : " "}
                    data-attribute="manga">
                        Manga
                </button>
                <button 
                    onClick={() => handleGenre("science")} 
                    className={isActive === "science" ? "active" : " "}
                    data-attribute="science">
                        Science
                </button>
                <button 
                    onClick={() => handleGenre("sports")} 
                    className={isActive === "sports" ? "active" : " "}
                    data-attribute="sports">
                        Sports
                </button>
                <button 
                    onClick={() => handleGenre("young-adults")} 
                    className={isActive === "young-adults" ? "active" : " "}
                    data-attribute="young-adults">
                        Young Adults
                </button>
                <button
                    onClick={() => handleGenre("travel")} 
                    className={isActive === "travel" ? "active" : " "}
                    data-attribute="travel">
                        Travel
                </button>
                <button 
                    onClick={() => handleGenre("education")} 
                    className={isActive === "education" ? "active" : " "}
                    data-attribute="education">
                        Education
                </button>
                <button 
                    onClick={() => handleGenre("paperback-advice")} 
                    className={isActive === "paperback-advice" ? "active" : " "}
                    data-attribute="paperback-advice">
                        Advice
                </button>
                <button 
                    onClick={() => handleGenre("food-and-fitness")} 
                    className={isActive === "food-and-fitness" ? "active" : " "}
                    data-attribute="food-and-fitness">
                        Food and Fitness
                </button>
                <button 
                    onClick={() => handleGenre("humor")} 
                    className={isActive === "humor" ? "active" : " "}
                    data-attribute="humor">
                        Humor
                </button>
            </div>
        </>
    )
}

export default Genre;