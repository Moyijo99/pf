"use client"
import { BsMedium, BsFillArrowRightCircleFill, BsBagFill, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import arrow from "../assets/arrow-down.svg"
import HeroStyles from "../styles/Hero.module.scss"
import Image from 'next/image';
import Link from "next/link";

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section className={`${HeroStyles.hero} container`}>
        <div className={ HeroStyles.cont }>
            <div className={ HeroStyles.text }>
                <div className={ HeroStyles.heroTitle }>
                    <span className={ HeroStyles.little }>Hi there, My Name is Muhammad Moyijo</span>
                    <h1 className={ HeroStyles.mainText }>A Data Analyst, Uncovering Insights from Raw Data</h1>
                </div>
            </div>
            <div className={ HeroStyles.btnCont }>
                <button className={`btn ${HeroStyles.rev}`} onClick={scrollToProjects}>Portfolio <BsBagFill /></button>
                <Link href="/contact">
                    <button className='btn'>Hire Me <BsFillArrowRightCircleFill /> </button>
                </Link>
            </div>
            <div className={ HeroStyles.socialLinks }>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://www.linkedin.com/in/muhammadmoyijo-bala" rel="noreferrer"><BsLinkedin className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://medium.com/@moyeedjo" rel="noreferrer"><BsMedium className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://github.com/Moyijo99" rel="noreferrer"><BsGithub className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://twitter.com/moyeedjo" rel="noreferrer"><BsTwitter className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://wa.me/message/KSLAK2HKVYBGK1" rel="noreferrer"><FaWhatsapp className={HeroStyles.icon} /></a>
            </div>
            <div className={ HeroStyles.bg }>
                <span>Data Analysis</span>
                <span>Data Science</span>
            </div>
        </div>
        <div className={ HeroStyles.arrow }>
            <Image src={arrow} alt="arrow" />
        </div>
    </section>
  )
}

export default Hero