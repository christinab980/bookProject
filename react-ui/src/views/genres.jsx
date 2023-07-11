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

    const apiKey = "eiXQ9V4I2rAf8ZwUbsSDCskl2h4PyvOl";

    useEffect(() => {
        let bookPromises = tags.map( tag => {
            let category = tag
            let url = `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${apiKey}`
            
            async function fetchData() {
                const response = await fetch(url)
                const data = await response.json()
                return data
            }
            return fetchData
        })

        async function getData() {
            let bookResponse = await Promise.all(bookPromises)
            console.log(bookResponse)
            setIsBookGenres(bookResponse)
        }
        getData()
    }, [])

    const handleClick = (e) => {
        const category = e.target.getAttribute("data-attribute");

        if(category === "combined-print-and-e-book-fiction"){
            setIsBookOptions(isBookGenre[0])
        }

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
