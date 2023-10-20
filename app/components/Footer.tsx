import logo from "../assets/logolight.svg";
import Link from "next/link";
import Image from 'next/image';
import FooterStyles from "../styles/Footer.module.scss";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={FooterStyles.footer}>
            <div className={`${FooterStyles.container} container`}>
                <Link href="/">
                    <Image src={logo} alt="logo" className={FooterStyles.logo} />
                </Link>
                <span className={FooterStyles.copyright}>&copy; ADM DEVS {year}</span>
            </div>
        </footer>
    );
};

export default Footer;
