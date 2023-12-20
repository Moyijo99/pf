"use client"
import PSStyles from "../styles/ProffessionalStatement.module.scss"

const ProffesionalStatement = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={`${PSStyles.Ps} container`}>
            <h2 className="title"><span className="line"></span>Professional Statement</h2>
            <h1 className={ PSStyles.subTitle }>Full-Stack Developer & UI/UX Designer</h1>
            <p>I&apos;m Maishanu Ahidjo, a seasoned software developer and designer with over 5 years of weaving captivating web experiences. As a full-stack developer and UI/UX maestro, I bridge the gap between stunning design and robust functionality. My front-end artistry flourishes with Angular, Next.js, and Vue.js, while on the backend, I wield Node.js, Express, Python, and Flask to forge resilient architectures.</p>
            <p>Collaboration is my canvas. I seamlessly integrate Git and Jira, ensuring projects flow like a well-choreographed ballet, with every step tracked and every beat in sync. This meticulous approach translates to streamlined workflows, timely deliveries, and applause-worthy results.</p>
            <p>But my true passion lies in the fusion of aesthetics and innovation. Witnessing users navigate intuitive interfaces and revel in smooth performance is the symphony that fuels my fire. This holistic approach, honed over five years of embracing new challenges and staying ahead of the curve, is what sets me apart. From dynamic frontends to robust backends, I&apos;m here to turn visions into reality, using the latest tools and methodologies to craft exceptional experiences.</p>
            <p>Ready to explore the details of my masterpieces? My <span onClick={scrollToProjects}>projects</span> await below, eager to tell their own stories of impact and success.</p>
        </section>
    )
}

export default ProffesionalStatement;
