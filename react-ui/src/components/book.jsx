import React from "react";
import { selectBookData } from "../features/dataSlice"
import { useSelector } from "react-redux"

const Book = () => {

    let data = useSelector(selectBookData)
    console.log(data)

    return (
        <> 
        {data && data.results && data.results.books && data.results.books.slice(0, 5).map((result, index)  =>
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