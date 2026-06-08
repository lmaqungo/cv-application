

const defaultPerson = {
    firstName: "Sipho",
    lastName: "Dlamini",
    jobTitle: "Software Engineer",
    phoneNumber: "+27 82 345 6789",
    emailAddress: "sipho.dlamini@gmail.com",
    github: "github.com/siphod",
    website: "siphod.dev",
    location: "Johannesburg, Gauteng",
    profileSummary :"Full-stack software engineer with a passion for building scalable, user-centred products. Experienced across the web stack with a strong foundation in computer science fundamentals. Thrives in collaborative environments and brings a systems-level perspective to every problem — from architecture decisions down to clean, maintainable code.",
    jobs: [
        {
            position: "Software Engineer",
            company: "Jumo World",
            startDate: "Mar 2022",
            endDate: "Present",
            description: "Developed and maintained microservices powering loan origination for 1M+ users across Africa\nReduced API response times by 40% through query optimisation and caching strategies\nLed migration of legacy monolith modules to a distributed Node.js architecture\nCollaborated with product and design to ship a redesigned borrower dashboard"
        }, 
        {
            position: "Junior Frontend Developer",
            company: "Offerzen",
            startDate: "Jan 2020",
            endDate: "Feb 2022",
            description: "Built and iterated on React components across the candidate-facing platform\nImproved Lighthouse performance scores from 61 to 89 across core pages\nIntroduced CSS Modules to the frontend codebase, eliminating style collision bugs"
        }
    ], 
    education: [
         {
            school: "University of Cape Town",
            course: "BSc Computer Science",
            startDate: "Feb 2016",
            endDate: "Nov 2019",
            description: "Graduated with distinction in Software Design and Algorithms\nFinal year project: a real-time collaborative code editor built on WebSockets\nTutor for first-year Introduction to Programming course"
        }
    ], 
    sections: [
        {
            sectionName: "Languages",
            sectionItems: ["JavaScript, TypeScript, Python, Java, SQL"],
            linkItems: []
        },
        {
            sectionName: "Tools",
            sectionItems: ["React, Node.js, PostgreSQL, Docker, Git, AWS, Figma"],
            linkItems: []
        },
        {
            sectionName: 'Certificates', 
            sectionItems: [],
            linkItems: [{href: "https://www.credly.com/badges/aws-certified-developer", linkContent: "AWS Certified     Developer— Associate (2023)" }, 
                        {href: "https://coursera.org/verify/meta-frontend-2021", linkContent: "Meta Frontend Developer Certificate (2021)"}
            ]
        }, 
        {
            sectionName: "Interests",
            sectionItems: ["Open source contribution", "Compilers and language design", "Afrofuturism in tech", "Trail running"],
            linkItems: []
        }
    ], 
    skills : []
}

export default defaultPerson



