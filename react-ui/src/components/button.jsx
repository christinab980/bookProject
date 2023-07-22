import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite, favorites } from '../features/favoritesSlice';
import { setHaveRead } from '../features/haveReadSlice';
import { username } from "../features/usernameSlice";
import { selectIsLoggedIn } from '../features/isloggedInSlice';

const Button = ({bookRank, url, book, title}) => {

    let dispatch = useDispatch()
    const loggedInData = useSelector(selectIsLoggedIn)

    useEffect(() => {
        if (loggedInData === true) {
            setLoggedInStatus(true)
        }
    }, [])

    const [ openDropDown, setOpenDropDown ] = useState(false);
    const [ favorite, setFavoriteCheckBox ] = useState(false);
    const [ haveReadCheckBox, setHaveReadCheckBox ] = useState(false);
    const [ loggedIn, setLoggedInStatus] = useState(false);

    function handleOptions() {
        setOpenDropDown(!openDropDown)
    }

    function handleFavorite() {
        setFavoriteCheckBox(!favorite)
        dispatch(setFavorite(title))
    }

    function handleBooks()  {
        setHaveReadCheckBox(!haveReadCheckBox)
        dispatch(setHaveRead(book))
    }

    return (
        <>
        {loggedIn ? (
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
                    <button
                            className="dropdown-menu-items" 
                            onClick={handleFavorite} 
                            >
                            Add to Favorites
                    </button>
                    <label>
                        <input 
                            type="checkbox" 
                            value={haveReadCheckBox} 
                            onChange={handleBooks} 
                            />
                            Have Read
                    </label>
                </div>}
            </div> 
        ): (
            <div className='dropdown'>
            <button onClick={handleOptions} className='dropdown-button'> Choose One </button>
            {openDropDown && <div className='dropdown-menu'>
                <div key={bookRank}>
                    <a
                        className="dropdown-menu-items" 
                        href="/sign-in"
                        target="_blank">
                            Sign In
                    </a>
                </div>
                <div key={bookRank}>
                    <a
                        className="dropdown-menu-items" 
                        href="/sign-up" 
                        target="_blank">
                            Sign Up
                    </a>
                </div>
            </div>}
        </div>
    )}
        </>
    )
}

export default Button;