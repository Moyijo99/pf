import { BsFillArrowRightCircleFill, BsBagFill, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import arrow from "../assets/arrow-down.svg"
import HeroStyles from "../styles/Hero.module.scss"
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={`${HeroStyles.hero} container`}>
        <div className={ HeroStyles.cont }>
            <div className={ HeroStyles.text }>
                <div className={ HeroStyles.heroTitle }>
                    <span className={ HeroStyles.little }>Hello 👋🏽, I am Ahidjo,</span>
                    <h1 className={ HeroStyles.mainText }>A Full-Stack Developer & UI/UX Designer, Turning Ideas into Digital Experiences.</h1>
                </div>
            </div>
            <div className={ HeroStyles.btnCont }>
                <button className={`btn ${HeroStyles.rev}`}>Portfolio <BsBagFill /></button>
                <button className='btn'>Hire Me <BsFillArrowRightCircleFill /> </button>
            </div>
            <div className={ HeroStyles.socialLinks }>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://www.linkedin.com/in/maishanu-ahidjo-36bb7b1bb/" rel="noreferrer"><BsLinkedin className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://github.com/Aheedjo" rel="noreferrer"><BsGithub className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://twitter.com/Ahidjo_DM" rel="noreferrer"><BsTwitter className={HeroStyles.icon} /></a>
                <a className={ HeroStyles.socialLink } target="_blank" href="https://api.whatsapp.com/send?phone=08143410800" rel="noreferrer"><FaWhatsapp className={HeroStyles.icon} /></a>
            </div>
            <div className={ HeroStyles.bg }>
                <span>Backend</span>
                <span>Frontend</span>
                <span>ui/ux</span>
            </div>
        </div>
        <div className={ HeroStyles.arrow }>
            <Image src={arrow} alt="arrow" />
        </div>
    </section>
  )
}

export default Hero