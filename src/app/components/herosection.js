import React from 'react';
import Image from "next/image";
import herostyle from "@/app/styles/hero.css"
import Link from "next/link";
import gStyles from "@/app/globals.css"

const Herosection = ({title, imgurl}) => {
    return (
        <div className="main-section">
            <div className="container">
                <div className="grid_two_section">
                    <div className="left-h">
                        <h1> {title} </h1>
                        <p> From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today. </p>
                        <Link href={"/movies"}> <button> Explore Movies </button> </Link>
                    </div>
                    <div className="right-h">
                        <Image src={imgurl} alt={"movie"} height={400} width={400}/>
                    </div>
                </div>
            </div>
            <div className={gStyles['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={gStyles["shape-fill"]}></path>
                </svg>
            </div>
        </div>
    );
};

export default Herosection;