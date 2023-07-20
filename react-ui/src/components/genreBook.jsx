import React from "react";
import Button from "./button"
import  { advice, education, family, fiction, nonFiction, foodAndFitness, humor, manga, science, sports, travel, youngAdult } from "../mock/index"
import { useSelector } from "react-redux";
import { setFavorite, favorites } from "../features/favoritesSlice";

const GenreBook = () => {

    const _favorites = useSelector(favorites)
    console.log("thisone", _favorites)

    const category = {advice, education, family, fiction, nonFiction, foodAndFitness, humor, manga, science, sports, travel, youngAdult }
    
    function stringToObject(selectedGenre) {
        selectedGenre = selectedGenre.slice(1,-1).split(",")
        const objectData = {};
        for (let i = 0; i < selectedGenre.length; i++) {
        const key = i; 
        const value = selectedGenre[i].trim(); 
        objectData[key] = value;
        }

        return objectData;
    }

    const test = stringToObject(_favorites)
    console.log(test)
    // JSON.parse(test)

    return (
        <> 
        {test.results.books.slice(0, 10).map((result, index)  =>
            (result !== "" ? <div className="book-container" key={result.rank}>
                    <div className="book-img">
                        <img src={result.book_image} alt="book-cover" />
                    </div>
                    <div className="book-title">{result.title}</div>
                    <div className="book-author">{result.author}</div>
                    <div className="book-description">{result.description}</div>
                    <Button 
                        bookRank={result.rank}
                        url={result.amazon_product_url}
                        book={result}
                    />
                </div> : null
            )
        )}
        </>
    )
}

export default GenreBook;