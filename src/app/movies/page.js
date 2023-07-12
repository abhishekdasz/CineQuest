import React from 'react';
import Moviecard from "@/app/components/moviecard";
import movieStyles from "@/app/styles/movies.css";

const Movies = async () => {
    await new Promise(resolve => setTimeout(resolve,2000));

    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7d47d9bfcemsh997277eb47e51b2p16362bjsn05922e8c7362',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(data);

    return (
        <>
            <center><h1> Movies Page </h1></center> <br/>
            <div className="movies-container">
                {

                    main_data.map((currElem)=>{
                        return <Moviecard key={currElem.id} {...currElem} />
                    })
                }
            </div>
        </>
    );
};

export default Movies;