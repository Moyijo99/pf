import { projects } from "../data";
import Image from 'next/image';
import projectsStyles from "../styles/Projects.module.scss";

const Projects = ({ id }: { id: string }) => {        
  return (
    <section className={`${projectsStyles.projects} container`} id={id}>
      <h2 className="title"><span className="line"></span>Projects</h2>
      <div className={projectsStyles.projectsGrid}>
        {
          projects.map((project, i: number) => (
            <article key={i} className={projectsStyles.project}>
              {
                project.tag === 'Front-end' && (
                  <Image src={project.image} className={projectsStyles.image} alt="project-image" />
                )
              }
              <div className={projectsStyles.infoCont}>
                <div className={projectsStyles.info}>
                  <div>
                    <span className={projectsStyles.tag}>{project.tag}</span>
                  </div>
                  <h4 className={projectsStyles.title}>{project.title}</h4>
                  <p className={projectsStyles.text}>{project.text}</p>
                </div>
                <div className={projectsStyles.techs}>
                  {
                    project.techs.map((tech, i) => (
                      <div key={i}>
                        <p className={projectsStyles.tech}>{tech}</p>
                      </div>
                    ))
                  }
                </div>
                <div className={projectsStyles.btnCont}>
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
                      <a href={project.articleLink} target="_blank" rel="noopener noreferrer">Read Article</a>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </section>   
  );
};

export default Projects;
