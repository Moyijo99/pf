import dataicon from "./assets/dataicon.jpg"
import nileLogo from "./assets/nile logo.png"
import project1Image from "./assets/4.png"
import cyberlogo from "./assets/cyberlogo.png"
import galaxylogo from "./assets/logo2019-1.png"
import griotlogo from "./assets/GraphicLogo-1-scaled.jpg"

export const skills = [
    {
        icon: dataicon,
        title: "Data analysis",
        info: "Transforming raw data into meaningful insights to drive business decisions."
    },
];

export const projects = [
    {
        tag: "SQL",
        title: "Transaction Analysis Using SQL",
        text: "This case study is all about calculating metrics, growth and helping Data Bank; a FinTech startup analyse their data in a smart way to better forecast and plan for their future developments.",
        image: project1Image,
        techs: ["PostgreSQL", "Github"],
        codeLink: "https://github.com/Moyijo99/SQL-Challenge-Case-Study-4---Data-Bank/tree/main",
        articleLink: "https://medium.com/@moyeedjo/8-week-sql-challenge-4-data-bank-f0179aeea7dc"
    },
    {
        tag: "Python",
        title: "911 Calls Analysis Using Python",
        text: "For this project we analyzed some 911 call data from Kaggle using python.",
        image: project1Image,
        techs: ["Python", "TypeScript", "Seaborn", "Pandas", "Numpy", "Matplotlib", "Github"],
        codeLink: "https://github.com/Moyijo99/911-Calls-Analysis-Python.git",
        articleLink: "https://medium.com/@moyeedjo/911-calls-capstone-project-a533d12b784c"
    }
];

export const experience = [
   
    {
        title: "Intern",
        company: "Galaxy Backbone LTD",
        logo: galaxylogo,
        employmentType: "Internship",
        startDate: "Mar 2024",
        endDate: "Aug 2024",
        location: "Federal Capital Territory, Nigeria",
        Description: "During my internship, I managed and analyzed data, ensuring accuracy and consistency across datasets. I collected data from various sources, organized it effectively, and utilized analytical tools to derive meaningful insights. This work supported decision-making processes and contributed to the overall data strategy of the organization.",
        techs: ["PostgreSQL", "Microsoft Excel", "Pandas", "Tableau", "Google Forms", "Microsoft Word","Seaborn","GitHub"] ,
    },
    {
        title: "Intern",
        company: "Griot Studios",
        logo: griotlogo,
        employmentType: "Internship",
        startDate: "Jan 2021",
        endDate: "Mar 2021",
        location: "Federal Capital Territory, Nigeria",
        Description: "During my internship, I sorted, organized, and maintained files while gathering and inputting data into a digital database. I also distributed office supplies and files for staff and managed incoming calls, answering and transferring them while taking messages for various team members.",
        techs: ["Microsoft Excel","Google Sheets", "Microsoft Word","Python"] ,
    },
    {
        title: "Intern",
        company: "Cyberlogik Solutions",
        logo: cyberlogo,
        employmentType: "Internship",
        startDate: "Jul 2020",
        endDate: "Dec 2020",
        location: "Federal Capital Territory, Nigeria",
        Description: "Assisted in industry trade shows by interacting with consumers and answering questions, while liaising with clients to assess their needs and respond to inquiries. Additionally, observed packaging operations to ensure conformance to specifications and enhanced production of various products to exceed goals.",
        techs: [''] ,
    }
]

export const education = [
    {
        logo: nileLogo,
        institution: "NILE University of Nigeria",
        degree: "Bachelor fo Engineering - BE",
        field: "Computer Engineering",
        startDate: "Mar 2021",
        endDate: "Nov 2025",
        location: "Federal Capital Territory, Nigeria",
        skills: ["Machine Learning", "Embedded Systems", "Networking", " Software Development", "Electrical Engineering", "Control Systems Design"]
    }
]
