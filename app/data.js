import webDesign from "./assets/web-design.png"
import server from "./assets/server.png"
import design from "./assets/design.png"
import project1Image from "./assets/Screenshot 2023-10-09 105717.png"
import project2Image from "./assets/bd.png"
import project3Image from "./assets/form.png"
import project4Image from "./assets/url.jpg"

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
        text: "Showcasing e-commerce project-products, sales, about, contact, checkout. Demonstrates web development skills.",
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
];