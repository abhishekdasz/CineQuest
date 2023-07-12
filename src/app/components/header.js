import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/nav";
import styles from "@/app/styles/nav.css";

const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link href="/">
                        <Image src="/logo.png" alt="mylogo" width={100} height={30}/>
                    </Link>
                </div>
                <div className="navList">
                    <Nav/>
                </div>
            </div>
        </>
    );
};

export default Header;