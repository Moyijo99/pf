"use client"
import EducationStyles from "../styles/Education.module.scss"
import { education } from "../data"
import Image from 'next/image';

const Education = () => {
    return (
        <section className={`${EducationStyles.educationContainer} container`}>
            <h2 className="title"><span className="line"></span>Education</h2>
            <div className={ EducationStyles.educationGrid }>
                {
                    education.map((singleEducation, i) => {
                        return (
                            <article key={ i } className={ EducationStyles.education }>
                                    <div className={ EducationStyles.infoCont }>
                                        <Image src={ singleEducation.logo } className={ EducationStyles.logo } alt="company-image" />
                                        <div className={ EducationStyles.detailsWrapper }>
                                            <div className={ EducationStyles.details }>
                                                <h4 className={ EducationStyles.title }>{ singleEducation.institution }</h4>
                                                <p>{ singleEducation.degree } &middot; { singleEducation.field }</p>
                                                <p className={ EducationStyles.grey }>{ singleEducation.startDate } - { singleEducation.endDate }</p>
                                                <p className={ EducationStyles.grey }>{ singleEducation.location }</p>
                                            </div>
                                            <div className={ EducationStyles.skills }>
                                                {
                                                    singleEducation.skills.map((skill, i) => {
                                                        return (
                                                            <div key={i}>
                                                                <p className={ EducationStyles.skill }>{ skill }</p>
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

export default Education;