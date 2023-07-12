import React from 'react';
import Link from "next/link";
import styles from "@/app/styles/nav.css";

const Nav = () => {
    return (
        <nav className="navList">
            <div>
                <ul>
                    <li> <Link href="/"> Home </Link> </li>
                    <li> <Link href="/about"> About Us </Link> </li>
                    <li> <Link href="/movies"> Movies </Link> </li>
                    <li> <Link href="contact"> Contact Us </Link> </li>
                </ul>
            </div>

        </nav>
    );
};

export default Nav;