import React from 'react';

const LandingPopularGenres = () => {

    return (
        <>
            <div className="genre-landing-component">
                <a 
                    data-attribute="family" 
                    href='/genres'>
                        Family
                </a>
                <a 
                    data-attribute="fiction"
                    href='/genres'>
                        Fiction
                </a>
                <a 
                    data-attribute="non-fiction"
                    href='/genres'>
                        Non-Fiction 
                </a>
                <a 
                    data-attribute="manga"
                    href='/genres'>
                        Manga
                </a>
                <a 
                    data-attribute="science"
                    href='/genres'>
                        Science
                </a>
                <a 
                    data-attribute="sports"
                    href='/genres'>
                        Sports
                </a>
                <a 
                    data-attribute="young-adults"
                    href='/genres'>
                        Young Adults
                </a>
                <a 
                    data-attribute="travel"
                    href='/genres'>
                        Travel
                </a>
                <a  
                    data-attribute="education"
                    href='/genres'>
                        Education
                </a>
                <a 
                    data-attribute="paperback-advice"
                    href='/genres'>
                        Advice
                </a>
                <a 
                    data-attribute="food-and-fitness"
                    href='/genres'>
                        Food and Fitness
                </a>
                <a 
                    data-attribute="humor"
                    href='/genres'>
                        Humor
                </a>
            </div>
        </>
    )
}

export default LandingPopularGenres;