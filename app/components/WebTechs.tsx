import { FaHtml5, FaSass, FaPython, FaAngular, FaReact, FaFigma, FaNodeJs, FaGithub } from "react-icons/fa"
import { RiFileExcel2Line } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGooglesheets, SiJupyter, SiNumpy, SiTableau, SiPandas, SiTypescript, SiExpress, SiTailwindcss, SiFlask, SiJira, SiSvelte, SiMongodb, SiHeroku, SiVercel } from "react-icons/si"
import { DiGit } from "react-icons/di"
import WebTechsStyles from "../styles/WebTechs.module.scss"
import Image from 'next/image';
import seabornicon from '../assets/logos--seaborn-icon.svg'
import matploticon from '../assets/devicon-plain--matplotlib-wordmark.svg'

const WebTechs = () => {
  return (
    <section className={`${WebTechsStyles.webTechs} container`}>
        <>
            <h2 className="title"><span className="line"></span>Tools</h2>
            <p></p>
        </>
        <div className={ WebTechsStyles.webTechsGrid }>
            <div>
                <BiLogoPostgresql className={ WebTechsStyles.webTech } />
                <p>PostgreSQL</p>
            </div>
            <div>
                <SiPandas className={ WebTechsStyles.webTech } />
                <p>Pandas</p>
            </div>
            <div>
                <FaPython className={ WebTechsStyles.webTech } />
                <p>Python</p>
            </div>
            <div>
                <DiGit className={ WebTechsStyles.webTech } />
                <p>Git</p>
            </div>
            <div>
                <FaGithub className={ WebTechsStyles.webTech } />
                <p>GitHub</p>
            </div>
            <div>
                <SiVercel className={ WebTechsStyles.webTech } />
                <p>Vercel</p>
            </div>
            <div>
                <RiFileExcel2Line className={ WebTechsStyles.webTech } />
                <p>Excel</p>
            </div>
            <div>
                <SiTableau className={ WebTechsStyles.webTech } />
                <p>Tableau</p>
            </div>
            <div>
                <SiNumpy className={ WebTechsStyles.webTech } />
                <p>Numpy</p>
            </div>
            <div>
                <Image src={seabornicon} className={ WebTechsStyles.webTech } alt="profile-image" />
                <p>Seaborn</p>
            </div>
            <div>
                <Image src={matploticon} className={ WebTechsStyles.webTech } alt="profile-image" />
                <p>Matplotlib</p>
            </div>
            <div>
                <SiGooglesheets className={ WebTechsStyles.webTech } />
                <p>Google Sheets</p>
            </div>
            <div>
                <SiJupyter className={ WebTechsStyles.webTech } />
                <p>Jupyter</p>
            </div>
        </div>
    </section>
  )
}

export default WebTechs
