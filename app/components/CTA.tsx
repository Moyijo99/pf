import Link from "next/link";
import CtaStyles from "../styles/Cta.module.scss"


const CTA = () => {
  return (
    <section className={`${CtaStyles.cta} container`}>
        <div>
            <h1 className={ CtaStyles.text }>Have a project in mind?</h1>        
            <h1 className={ CtaStyles.text }>Have a Job for me?</h1>        
        </div>
        <Link href="/contact"><button className="btn">Contact me</button></Link>
    </section>
  )
}

export default CTA
