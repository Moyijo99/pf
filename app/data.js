import webDesign from "./assets/web-design.png"
import server from "./assets/server.png"
import design from "./assets/design.png"
import project1Image from "./assets/Screenshot 2023-10-09 105717.png"
import project2Image from "./assets/bd.png"
import project3Image from "./assets/form.png"
import project4Image from "./assets/url.jpg"
import alxLogo from "./assets/alx-logo.svg"
import nnpcLogo from "./assets/NNPC-logo.svg"
import platrLogo from "./assets/Platr-logo.svg"

export const skills = [
    {
        icon: webDesign,
        title: "Front-end Developement",
        info: "Crafting intuitive user interfaces with HTML, CSS, and JavaScript for seamless user experiences."
    },
    {
        icon: design,
        title: "UI/UX Design",
        info: "Creating visually stunning designs and intuitive user flows for delightful user interactions."
    },
    {
        icon: server,
        title: "Back-end Developement",
        info: "Building robust server-side applications, handling data, and ensuring secure functionality."
    },
];

export const projects = [
    {
        tag: "Front-end",
        title: "where in the world?",
        text: "Explore the world with my countries app—real-time data, borders, and a color theme switcher for a dynamic, informative experience",
        image: project1Image,
        techs: ["nextJs", "TypeScript", "JavaScript", "Sass", "Tailwind"],
        codeLink: "https://github.com/Aheedjo/REST-Countries-API-with-color-theme-switcher",
        liveLink: "https://rest-countries-api-with-color-theme-switcher-aheedjo.vercel.app/"
    },
    {
        tag: "Front-end",
        title: "Bearded Dare",
        text: "Showcasing e-commerce project-products, sales, about, contact, checkout. Demonstrates web development skills. (In-developement)",
        image: project2Image,
        techs: ["nextJs", "TypeScript", "JavaScript", "Sass", "Tailwind"],
        codeLink: "https://github.com/Aheedjo/bearded-dare",
        liveLink: "https://bearded-dare.vercel.app/"
    },
    {
        tag: "Front-end",
        title: "Multi Step Form",
        text: "Created a multi-step form with validation, step indicator, and pricing logic for plan selection, enhancing user experience efficiently.",
        image: project3Image,
        techs: ["VueJs", "JavaScript", "Sass", "Tailwind"],
        codeLink: "https://github.com/Aheedjo/multi-step-form",
        liveLink: "https://multi-step-form-2mlysvi4v-aheedjo.vercel.app/"
    },
    {
        tag: "Front-end",
        title: "URL shortener",
        text: "Utilizing the Shrtcode API, my URL shortener condenses long links, enhancing web accessibility and efficiency—a simple solution for streamlined sharing.",
        image: project4Image,
        techs: ["CSS", "HTML", "JavaScript"],
        codeLink: "https://github.com/Aheedjo/url-shortening-api-master",
        liveLink: "https://fascinating-cheesecake-452b26.netlify.app/"
    },
    // {
    //     tag: "Front-end",
    //     title: "Portfolio website",
    //     text: "Explore my portfolio for a glimpse into web innovation. Elevate your digital presence with sleek designs and seamless experiences. 🌐",
    //     image: project5Image,
    //     techs: ["NextJs", "Tailwind", "EmailJs", "ReactJs", "Sass"],
    //     codeLink: "https://github.com/Aheedjo/adm",
    //     liveLink: "https://adms-portfolio.vercel.app/"
    // },
    {
        tag: "Back-end  ||  API",
        title: "Task Management API",
        text: "A backend API enables user authentication and CRUD operations for tasks, projects, and labels, backed by a MongoDB database",
        image: '',
        techs: ["NodeJs", "Express", "MongoDB", "Mongoose", "Docker"],
        codeLink: "https://github.com/Aheedjo/task-management-application-backend",
    },
    {
        tag: "UI/UX",
        title: "Photos app design",
        text: "UI/UX design showcasing captivating images created with Figma, harmonizing aesthetics and user-centric design principles for a visually engaging platform",
        image: '',
        techs: ["Figma"],
        designLink: "https://www.figma.com/file/04tyguplG6MnaFzuWbvstc/Photos-APp?type=design&node-id=0-1&mode=design&t=ZRPzWZ3IgF9HXffo-0",
    },
    {
        tag: "UI/UX",
        title: "OffCampus design",
        text: "UI/UX design for a housing app, simplifying student-landlord connections with intuitive features for efficient house searching and landlord engagement",
        image: '',
        techs: ["Figma"],
        designLink: "https://www.figma.com/file/Mw47LTQgFA8PeqCiFoaIYL/App-dev-project?type=design&node-id=0-1&mode=design&t=XzPNcfLynWajP0H3-0",
    },
    {
        tag: "UI/UX",
        title: "Bearded Dare design",
        text: "UI/UX design for a Hair brand company, e-commerce project-products, sales, about, contact, checkout. Demonstrates web development skills.",
        image: '',
        techs: ["Figma"],
        designLink: "https://www.figma.com/file/kew5fgxKv6PJWEqBHHo7Mf/Bearded-Dare?type=design&node-id=355-2031&mode=design&t=EDjcROLzxb3uoUeh-0",
    },
];

export const experience = [
    {
        title: "Full-Stack Developer",
        company: "PLATR",
        logo: platrLogo,
        employmentType: "Full-time",
        startDate: "Jun 2022",
        endDate: "Present",
        location: "Remote",
        Description: "Following my exceptional UI/UX design contributions at PLatr, my work ethic and dedication garnered recognition. I seamlessly transitioned into a full-time role, extending beyond design to join the development team. Tasked with frontend responsibilities using Angular and more, I continued my on-the-go learning journey, consistently improving and contributing to the application's development.",
        techs: ["Teamwork", "Back-End Web Development", "API Development", "Project Management", "Jira", "Front-End Development", "Git", "Node", "MongoDB", "Express", "Figma", "Problem Solving", "Tailwind CSS", "SCSS", "Angular", "HTML", "TyprScript"],
        linkToProject: "https://platr.ng/",
        extra: {
            title: "User Interface Designer",
            employmentType: "contract",
            startDate: "Mar 2022",
            endDate: "Jul 2022",
            location: "Remote",
            Description: "At PLatr, my initial engagement as a UI/UX Designer was a dynamic learning experience. Despite no prior expertise, I embraced the challenge, swiftly acquiring proficiency in Figma. Through proactive research and self-motivation, I honed my design skills on-the-go, ensuring robust and trend-aligned interfaces for the project.",
            techs: ["Figma", "User Experience (UX)", "Wireframing", "Prototyping", "Information Architecture", "Usability Testing", "Responsive Web Design", "Teamwork", "Communication"],
        }
    },
    {
        title: "Intern",
        company: "NNPC",
        logo: nnpcLogo,
        employmentType: "Internship",
        startDate: "Jun 2023",
        endDate: "Present",
        location: "Federal Capital Territory, Nigeria",
        Description: "During my internship at NNPC, I leveraged my prior development experience to lead a team and contribute significantly. Innovating in design, I crafted solutions now integral to various company applications. Additionally, I utilized Power Apps to develop user-friendly apps and spearheaded the creation of a centralized hub for the HSE department, enhancing efficiency and information accessibility across NNPC.",
        techs: ["Requirements Analysis", "Market Analysis", "Market Research", "Competitive Analysis", "Stock Market Analysis", "Business Requirements", "BRDs", "Back-End Web Developement", "Training", "Microsoft power Apps", "Training", "Microsoft Power BI", "SharePoint", "Dataverse", "Front-End Development", "React.js"] ,
    }
]