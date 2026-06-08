import {  useState, useRef } from "react";
import { InputValuesContext } from "./InputValuesContext";

export default function InputValuesProvider({children}){
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
    const [jobs, setJobs] = useState([]); 
    const [education, setEducation] = useState([]); 
    const [skills, setSkills] = useState([]);
    const [sections, setSections] = useState([]);
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

