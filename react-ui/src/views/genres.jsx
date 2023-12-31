import React from 'react';
import Book from "../components/book"
import Button from "../components/button"
import { useSelector } from 'react-redux';
import { selectBookData } from '../features/dataSlice';

import fiction from "../mock/fiction.json";
import manga from "../mock/manga.json";
import science from "../mock/science.json";
import sports from "../mock/sports.json";
import youngAdult from "../mock/young-adult.json";
import nonfiction from "../mock/nonfiction.json";
import family from "../mock/family.json";
import education from "../mock/education.json";
import travel from "../mock/travel.json";
import advice from "../mock/advice.json";
import humor from "../mock/humor.json";
import foodAndFitness from "../mock/foodAndFitness.json"


const Genres = () => {

    let data = useSelector(selectBookData)

    return (
        <>
            <div className='hero-image-genre'>
                <div className='hero-text'>
                    <h2>Genres</h2>
                    <p>Browse your favorite genre books!</p>
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Fiction </h2>
                <div className='genre-category-component'>
                    {fiction.results.books.map((result, index) => 
                        <div className='book-container-genre-page'key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Non-Fiction </h2>
                <div className='genre-category-component'>
                    {nonfiction.results.books.map((result, index) => 
                        <div className='book-container-genre-page'key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Young Adult</h2>
                <div className='genre-category-component'>
                    {youngAdult.results.books.map((result, index) => 
                        <div className='book-container-genre-page' key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Magna </h2>
                <div className='genre-category-component'>
                    {manga.results.books.map((result, index) => 
                        <div className='book-container-genre-page' key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Science </h2>
                <div className='genre-category-component'>
                    {science.results.books.map((result, index) => 
                        <div className='book-container-genre'key={result.rank}>
                            <div className='book-img'>
                                <img src={result.book_image} alt="book-cover" />
                            </div>
                            <div className="book-title">{result.title}</div>
                            <div className="book-author-genre">{result.author}</div>
                            <Button 
                                bookRank={result.rank}
                                url={result.amazon_product_url}
                                book={result}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Sports</h2>
                <div className='genre-category-component'>
                    {sports.results.books.map((result, index) => 
                        <div className='book-container-genre'key={result.rank}>
                            <div className='book-img'>
                                <img src={result.book_image} alt="book-cover" />
                            </div>
                            <div className="book-title">{result.title}</div>
                            <div className="book-author-genre">{result.author}</div>
                            <Button 
                                bookRank={result.rank}
                                url={result.amazon_product_url}
                                book={result}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Family</h2>
                <div className='genre-category-component'>
                    {family.results.books.map((result, index) => 
                        <div className='book-container-genre-page' key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Eduction</h2>
                <div className='genre-category-component'>
                    {education.results.books.map((result, index) => 
                        <div className='book-container-genre-page' key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Travel</h2>
                <div className='genre-category-component'>
                    {travel.results.books.map((result, index) => 
                        <div className='book-container-genre-page' key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Advice</h2>
                <div className='genre-category-component'>
                    {advice.results.books.map((result, index) => 
                        <div className='book-container-genre-page' key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Humor</h2>
                <div className='genre-category-component'>
                    {humor.results.books.map((result, index) => 
                        <div className='book-container-genre-page' key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
            <div className='genre-category-container'>
                <h2>Food and Fitness</h2>
                <div className='genre-category-component'>
                    {foodAndFitness.results.books.map((result, index) => 
                        <div className='book-container-genre-page' key={result.rank}>
                            <div className='book-img'>
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
                    )}
                </div>
            </div>
        </>
    )
};

export default Genres;
