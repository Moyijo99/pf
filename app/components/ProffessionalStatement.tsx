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
            <h1 className={ PSStyles.subTitle }>Data Analyst</h1>
            <p>I&apos;m Muhammad Moyijo Bala, a dedicated data analyst, I specialize in extracting actionable insights from complex datasets to drive informed business decisions. With a keen eye for detail and a passion for problem-solving and learning, I excel in uncovering trends, identifying opportunities, and optimizing processes.</p>
            <p>Leveraging advanced analytical techniques and cutting-edge tools, I am committed to delivering valuable solutions that positively impact organizational performance. I'm very big on team work and collaboration, and through clear communication, I aim to empower teams with data-driven strategies that drive growth and innovation.</p>
            <p>My portfolio showcases a diverse range of projects, highlighting my proficiency in data analysis, visualization, and interpretation. Whether it's identifying key metrics, building predictive models, or developing interactive dashboards, I thrive on transforming raw data into meaningful insights.</p>
            <p>Let's connect to explore how I can contribute to your data-driven success.</p>
        </section>
    )
}

export default ProffesionalStatement;
