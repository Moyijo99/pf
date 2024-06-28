"use client"
import ExperienceStyles from "../styles/Experience.module.scss"
import { experience } from "../data"
import Image from 'next/image';

const Experience = () => {
    return (
        <section className={`${ExperienceStyles.experienceContainer} container`}>
            <h2 className="title"><span className="line"></span>Experience</h2>
            <div className={ ExperienceStyles.experienceGrid }>
                {
                    experience.map((singleExperience, i) => {
                        return (
                            <article key={ i } className={ ExperienceStyles.experience }>
                                    <div className={ ExperienceStyles.infoCont }>
                                        <div className={ ExperienceStyles.detailsWrapper }>
                                            <div className={ ExperienceStyles.details }>
                                                <div>
                                                    <h4 className={ ExperienceStyles.title }>{ singleExperience.title }</h4>
                                                    <p>{ singleExperience.company } &middot; { singleExperience.employmentType }</p>
                                                    <p className={ ExperienceStyles.grey }>{ singleExperience.startDate } - { singleExperience.endDate }</p>
                                                    <p className={ ExperienceStyles.grey }>{ singleExperience.location }</p>
                                                </div>
                                            </div>
                                            <p className={ ExperienceStyles.description }>{ singleExperience.Description }</p>
                                            <div className={ ExperienceStyles.techs }>
                                                {
                                                    singleExperience.techs.map((tech, i) => {
                                                        return (
                                                            <div key={i}>
                                                                <p className={ ExperienceStyles.tech }>{ tech }</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                 </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Experience;