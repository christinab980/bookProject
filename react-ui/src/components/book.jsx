import React, { useState, useEffect } from "react";
import { selectBookData } from "../features/dataSlice"
import { useSelector } from "react-redux"

const Book = () => {

    const [numberOfBooks, setNumberOfBooks] = useState(5)

    let data = useSelector(selectBookData)
    console.log(data)

    useEffect(() => {
        if (window.location.href === "http://localhost:5173/discover") {
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
                    <a className="book-buy-button" href={result.amazon_product_url} target="_blank">Buy</a>
                </div>
            )
        )}
        </>
    )
}

export default Book;