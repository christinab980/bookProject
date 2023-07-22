import React from "react";
import Button from "./button"
import  { advice, education, family, fiction, nonFiction, foodAndFitness, humor, manga, science, sports, travel, youngAdult } from "../mock/index"
import { useSelector } from "react-redux";
import { setGenreRecommendations, genres } from "../features/genreTable";
import { setFavorite, favorites } from "../features/favoritesSlice";

const GenreBook = () => {

    const _favorites = useSelector(favorites)
    const _genre = useSelector(genres)

    const category = {advice, education, family, fiction, nonFiction, foodAndFitness, humor, manga, science, sports, travel, youngAdult }

    const genreList = _genre && _genre.map((rec, index) => {
        const _genreRec = category[rec] && category[rec].results.books.map((result, index)  => (
            <div className="book-container" key={result.rank}>
                    <div className="book-img">
                        <img src={result.book_image} alt="book-cover" />
                    </div>
                    <div className="book-title">{result.title}</div>
                    <div className="book-author">{result.author}</div>
                    <div className="book-description">{result.description}</div>
                    <a className="buy-here-button" href={result.amazon_product_url} target="_blank">Buy Here</a>
                </div>
            )
        );
        return _genreRec
    })

    return (
        <> 
            {genreList}
        </>
    )
}

export default GenreBook;