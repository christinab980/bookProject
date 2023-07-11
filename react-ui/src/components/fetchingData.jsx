import React from "react";

const data = () => {

    async function fetchData() {
        let category = "e-book-fiction"
        let apiKey = "eiXQ9V4I2rAf8ZwUbsSDCskl2h4PyvOl"
        
        let url = `https://api.nytimes.com/svc/books/v3/lists/current/${caegory}.json?api-key=${apiKey}`
        const response = await fetch(url)
        const data = await response.json()

        console.log(data) 
        
        return data
    } 
    fetchData()
    
    return (
        <h1>Data </h1>

    )

}

export default data;