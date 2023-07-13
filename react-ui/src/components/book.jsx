import React, { useState, useEffect } from "react";
import { selectBookData } from "../features/dataSlice"
import { useSelector } from "react-redux"
import Button from "./button"


const Book = () => {
    const currentUrl = location.href;
    const [numberOfBooks, setNumberOfBooks] = useState(5);

    let data = useSelector(selectBookData);
    console.log(data)

    useEffect(() => {
        if (currentUrl.includes('discover')) {
            setNumberOfBooks(15)
        } if (currentUrl.includes('genres')) {
            setNumberOfBooks(15)
        } 
    }, [])

    return (
        <> 
        {data && data.results && data.results.books && data.results.books.slice(0, numberOfBooks).map((result, index)  =>
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

export default Book;