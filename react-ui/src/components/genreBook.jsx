import React, { useState, useEffect } from "react";
import Button from "./button"
import  { advice, education, family, fiction, nonFiction, foodAndFitness, humor, manga, science, sports, travel, youngAdult } from "../mock/index"


const GenreBook = () => {
    // const currentUrl = location.href;
    // const endpoint = currentUrl.match(/([^\/]+$)/g);
    // const url = endpoint ? endpoint[0] : '/';
    // console.log(url);
  
    // const [numberOfBooks, setNumberOfBooks] = useState(5);

    // useEffect(() => {
    //     if (currentUrl.includes('discover')) {
    //         setNumberOfBooks(15)
    //     } if (currentUrl.includes('genres')) {
    //         setNumberOfBooks(15)
    //     } 
    // }, [])

    const category = {advice, education, family, fiction, nonFiction, foodAndFitness, humor, manga, science, sports, travel, youngAdult }

    return (
        <> 
        {{category} && {category}.results && {category}.results.books && {category}.results.books.map((result, index)  =>
            (<div className="book-container" key={result.rank}>
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
        )}
        </>
    )
}

export default GenreBook;