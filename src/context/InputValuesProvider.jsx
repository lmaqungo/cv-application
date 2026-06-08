import {  useState, useRef } from "react";
import { InputValuesContext } from "./InputValuesContext";
import defaultPerson from "../default";
import { templateEducation, templateJob, templateSkill, templateSection, templateSectionItem, templateLinkItem } from "../templates";

export default function InputValuesProvider({children}){
    const [person, setPerson] = useState({
        firstName: defaultPerson.firstName, 
        lastName: defaultPerson.lastName, 
        jobTitle: defaultPerson.jobTitle, 
        phone: defaultPerson.phoneNumber, 
        email: defaultPerson.emailAddress, 
        github: defaultPerson.github,
        website: defaultPerson.website, 
        location: defaultPerson.location, 
        profileSummary: defaultPerson.profileSummary
    })
    const [jobs, setJobs] = useState(
        defaultPerson.jobs.map(job=> templateJob(
            job.position, 
            job.company, 
            job.startDate, 
            job.endDate, 
            job.description         
        ))
    ); 
    const [education, setEducation] = useState(
        defaultPerson.education.map(edu=> templateEducation(
            edu.school, 
            edu.course, 
            edu.startDate, 
            edu.endDate, 
            edu.description
        ))
    ); 
    const [skills, setSkills] = useState(
        defaultPerson.skills.map(skill => templateSkill(skill))
    );
    const [sections, setSections] = useState(
        defaultPerson.sections.map(section=> templateSection(
            section.sectionName, 
            section.sectionItems.map(sectionItem => templateSectionItem(sectionItem)), 
            section.linkItems.map(linkItem => templateLinkItem(linkItem.href, linkItem.linkContent))
        ))
    );
    const [toggleEdit, setToggleEdit] = useState(true);
    const contentRef = useRef(null);

    const contextObj = {
        jobs, setJobs, 
        education, setEducation, 
        person, setPerson, 
        skills, setSkills, 
        sections, setSections, 
        toggleEdit, setToggleEdit, 
        contentRef
    }
    
    return (
        <InputValuesContext value={contextObj} >
            {children}
        </InputValuesContext>
    )
}

