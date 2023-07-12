import React from 'react';
import Image from "next/image";
import movieStyles from "@/app/styles/movies.css";
import Link from "next/link";

const Moviecard = (currElem) => {
    const {id, type, title, synopsis} = currElem.jawSummary;
    return (
        <>
            <div className="card">
                <div className="cardImage">
                    <Image src={currElem.jawSummary.backgroundImage.url} alt={title} width={250} height={200}/>
                </div>
                <div className="card-content">
                    <h2> {title.substring(0,14)} </h2>
                    <p> {synopsis.substring(0,66)}... </p>
                    <Link href={`/movies/${id}`}> <button className="btn"> Read More </button> </Link>
                </div>
            </div>
        </>
    );
};

export default Moviecard;