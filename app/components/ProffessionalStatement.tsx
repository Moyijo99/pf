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
            <h1 className={ PSStyles.subTitle }>Data Scientist</h1>
            <p>I&apos;m Muhammad Moyijo Bala, a passionate data scientist focused on turning complex data into actionable insights that drive innovation and strategic decision-making. With a strong foundation in statistical analysis, machine learning, and data modeling, I excel at uncovering patterns, predicting outcomes, and solving intricate business challenges.</p>
            <p>I specialize in developing robust algorithms and leveraging cutting-edge technologies to deliver data-driven solutions that enhance organizational performance. My approach is deeply collaborative, and I believe in the power of teamwork and clear communication to transform raw data into impactful strategies that foster growth and efficiency.</p>
            <p>My portfolio showcases a diverse range of projects, emphasizing my expertise in data science, machine learning, and predictive analytics. Whether it&apos;s designing sophisticated models, optimizing processes through automation, or building interactive tools for data exploration, I am committed to creating value through innovation.</p>
            <p>Let&apos;s connect to explore how I can contribute to your data-driven success.</p>
        </section>
    )
}

export default ProffesionalStatement;
