import React, { useEffect, useState } from "react";
import { selectBookData } from "../features/dataSlice"
import { useSelector } from "react-redux"

const Book = () => {
    
    const [newData, setNewData] = useState([])

    let data = useSelector(selectBookData)
    console.log(data)

    return (
        <> 
        {data && data.results && data.results.books && data.results.books.map((result, index)  =>
            (<div className="book-container">
                <div className="book-title">{result.title}</div>
            </div>)
        )}
        </>
    )
}

export default Book;