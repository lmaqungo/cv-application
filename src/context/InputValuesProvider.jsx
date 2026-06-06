import {  useState } from "react";
import { InputValuesContext } from "./InputValuesContext";

export default function InputValuesProvider({children}){
    const [jobs, setJobs] = useState([]); 
    const [education, setEducation] = useState([]); 
    const [person, setPerson] = useState({
        firstName:'',
        lastName:'', 
        jobTitle:'', 
        phone:'', 
        email:'', 
        github:'',
        website:'', 
        location:'', 
        profileSummary: ''
    })
    const [skills, setSkills] = useState([]);
    const [sections, setSections] = useState([]);

    const contextObj = {
        jobs, setJobs, 
        education, setEducation, 
        person, setPerson, 
        skills, setSkills, 
        sections, setSections
    }
    
    return (
        <InputValuesContext value={contextObj} >
            {children}
        </InputValuesContext>
    )
}

