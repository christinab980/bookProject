import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { favesData } from '../features/favoritesSlice';

const Button = ({bookRank, url, book}) => {

    let dispatch = useDispatch()

    const [ openDropDown, setOpenDropDown ] = useState(false);
    const [ favorite, setFavorite ] = useState(false);
    const [ haveRead, setHaveRead ] = useState(false);

    function handleOptions() {
        setOpenDropDown(!openDropDown)
    }

    function handleFavorite() {
        setFavorite(!favorite)
        dispatch(favesData(book))
    }

    function handleBooks()  {
        setHaveRead(haveRead)
    }

    return (
        <>
        <div className='dropdown'>
            <button onClick={handleOptions} className='dropdown-button'> Choose One </button>
            {openDropDown && <div className='dropdown-menu'>
                <div key={bookRank}>
                    <a
                        className="dropdown-menu-items" 
                        href={url} 
                        target="_blank">
                            Buy Here
                    </a>
                </div>
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