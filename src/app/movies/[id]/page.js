import React from 'react';
import Image from "next/image";
import specificCardStyles from "@/app/styles/movies.css"

const Page = async ({params}) => {
    const id = params.id;
    console.log(id);

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7d47d9bfcemsh997277eb47e51b2p16362bjsn05922e8c7362',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;

    return (
        <>
            <h2 className="route"> Movies\<span>{main_data.type}</span> </h2> <br/>
            <div className="container-specific">
                <div className="specific-card">
                    <div> <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} /> </div>
                    <h1> {main_data.title} </h1>
                    <p> {main_data.synopsis} {main_data.synopsis} {main_data.synopsis}</p>
                </div>
            </div>
        </>
    );
};
export default Page;