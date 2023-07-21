import React from "react";
import Button from "./button"
import  { advice, education, family, fiction, nonFiction, foodAndFitness, humor, manga, science, sports, travel, youngAdult } from "../mock/index"
import { useSelector } from "react-redux";
import { setFavorite, favorites } from "../features/favoritesSlice";

const GenreBook = () => {

    const _favorites = useSelector(favorites)
    console.log("favorite", _favorites)

    const category = {advice, education, family, fiction, nonFiction, foodAndFitness, humor, manga, science, sports, travel, youngAdult }

    const favoritesList = _favorites && _favorites.map((fav, index) => {
        console.log("a", fav)
        const _fav = category[fav] && category[fav].results.books.map((result, index)  => (
            <div className="book-container" key={result.rank}>
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
                </div>
            )
        );
        return _fav
    })

    return (
        <> 
            {favoritesList}
        </>
    )
}

export default GenreBook;