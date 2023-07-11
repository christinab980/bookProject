import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favesData } from '../features/favoritesSlice';
import { selectBookData } from '../features/dataSlice';

const Button = () => {

    let dispatch = useDispatch()
    let data = useSelector(selectBookData)

    const [ openDropDown, setOpenDropDown ] = useState(false);
    const [ favorite, setFavorite ] = useState(false);
    const [ haveRead, setHaveRead ] = useState(false);

    function handleOptions() {
        setOpenDropDown(!openDropDown)
    }

    function handleFavorite() {
        setFavorite(!favorite)
        dispatch(favesData(data.results.books.title))
    }

    function handleBooks()  {
        setHaveRead(!haveRead)
    }

    return (
        <>
        <div className='dropdown'>
            <button onClick={handleOptions} className='dropdown-button'> Options </button>
            {openDropDown && <div className='dropdown-menu'>
                {data && data.results && data.results.books && data.results.books.map((result, index) =>
                (<a 
                    className="dropdown-menu-items" 
                    href={result.amazon_product_url[0]} 
                    target="_blank">
                        Buy
                </a>) 
                )}
                <label>
                    <input 
                        type="checkbox" 
                        value={favorite} 
                        onChange={handleFavorite} 
                        />
                        Add to Favorites
                </label>
                <label>
                    <input 
                        type="checkbox" 
                        value={haveRead} 
                        onChange={handleBooks} 
                        />
                        Have Read
                </label>
            </div>}
        </div>
        </>
    )
}

export default Button;