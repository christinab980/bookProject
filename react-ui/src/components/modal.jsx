import React, { useState } from 'react';
import GenreButtons from "./genreButtons"

const Modal = () => {

    return (
        <>
            <div className='modal-container'>
                <h4 className='modal-heading'>Pick your 3 favorite genres and hopefully we'll recommend your next favorite book!</h4>
                <GenreButtons />
            </div>
        </>
    )
}

export default Modal;