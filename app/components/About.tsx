import image from '../assets/image.jpg'
import Image from 'next/image';
import AboutStyles from "../styles/About.module.scss"

const About = () => {
    return (
        <section className={`${AboutStyles.about} container`}>
            <div className={AboutStyles.image}>
                <Image src={image} alt="profile-image" />
            </div>
            <div className={AboutStyles.text}>
                <h2 className="title"><span className="line"></span>About Me</h2>
                <h1>My Journey with Data.</h1>
                <p>After attending a summer coding school as a child, I knew coding was my passion. However, my coding journey truly began in 2021 during isolation from COVID-19, when I learned the fundamentals of Python.</p>
                <p>I stagnated for a while, unable to find an aspect of programming that excited me. That changed in 2022 when I discovered data analysis, which perfectly combined my love for statistics and analysis. I gathered resources online and started learning.</p>
                <p>Today, I am an intern in the data field, eager for more experiences and opportunities to learn, with plans to venture into machine learning in the near future.</p>
            </div>
        </section>
    )
}

export default About

