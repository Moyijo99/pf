import React from 'react'
import logo from '../assets/logo.svg'
// import resume from "../assets/"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import Link from "next/link";
import Image from 'next/image';
import NavBarStyles from "../styles/Navbar.module.scss"

function Navbar() {    
    return (
        <header className={NavBarStyles.nav}>
            <div className={NavBarStyles.container}>
                <nav>
                    <Link href="/">
                        <Image 
                            src={logo} 
                            alt="logo" 
                            className={NavBarStyles.logo}
                    /></Link>
                    <div>
                        <div className={NavBarStyles.navigationitem}>
                            <Link href="/">Home</Link>
                            <span className={NavBarStyles.line}></span>
                        </div>
                        <div>
                            <div className={NavBarStyles.navigationItem}>
                                {/* <a href={ resume } download="Maishanu's Resume">Download r&Eacute;sum&Eacute;</a> */}
                                <span className={NavBarStyles.line}></span>
                            </div>
                            <Link href="/contact-me">
                                <button className={NavBarStyles.btn}>
                                    Contact me 
                                    <BsFillArrowRightCircleFill className={NavBarStyles.col} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar