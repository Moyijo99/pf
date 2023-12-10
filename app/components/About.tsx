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
                <h1>In the Pixels and Beyond 🚀.</h1>
                <p>I began my coding journey during the challenging times of the COVID-19 pandemic. Starting with Python, I gradually ventured into web development, initially exploring Flask. However, I soon realized the significance of frontend skills and took on the challenge of mastering HTML, CSS, and JavaScript. To refine my abilities, I immersed myself in challenging projects on Frontend Mentor.</p>
                <p>In 2022, fate took an unexpected turn when a friend (Hassino) offered me an opportunity in the realm of UI/UX design. Despite having no prior experience in this domain, I enthusiastically accepted the offer and quickly adapted to the role. Known for my ability to learn fast, I completed the design work after six months of dedicated effort.</p>
                <p>I transitioned to the development team, learning on the job and picking up technologies like Angular. Today, I&apos;m a mid-level software developer. Beyond web development, I&apos;m venturing into game development with Unreal Engine 5 and exploring machine learning with a friend (Lil D 😂).</p>
            </div>
        </section>
    )
}

export default About