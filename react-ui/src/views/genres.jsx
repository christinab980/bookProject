import React, { useEffect, useState } from 'react';
import Modal from "../components/modal";
import manga from "../mock/manga.json";
import science from "../mock/science.json";
import sports from "../mock/sports.json";
import youngAdult from "../mock/young-adult.json";
import fiction from "../mock/fiction.json";
import nonfiction from "../mock/nonfiction.json";

const Genres = () => {

    const [isBookGenre, setIsBookGenres] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [isBookOptions, setIsBookOptions] = useState([])

    const tags = ["paperback-advice", "paperback-graphic-books", "chapter-books", "picture-books", "crime-and-punishment", "eduction", "relationship", "sports", "travel", "science"]
    const apiKey = "eiXQ9V4I2rAf8ZwUbsSDCskl2h4PyvOl";

    const handleClick = (e) => {
        setIsModal(!isModal)
    }

    return (
        <div className='container'>
            <div className='book-genres-modals'>
            {!isModal && <button className='modal-button' data-attribute="combined-print-and-e-book-fiction" onClick={handleClick}> Fiction </button>}
            {!isModal && (<Modal action={handleClick} />)}
            </div>
        </div>
    )
};

export default Genres;
