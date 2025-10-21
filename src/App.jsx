import { useState, useEffect, useRef } from 'react';
import './App.css';
import AccordionMenu from './components/AccordionMenu';
import DummyPDF from './components/DummyPDF';
import Accordion from './components/Accordion';
import FirstName from './components/inputs/FirstName';
import LastName from './components/inputs/LastName';
import JobTitle from './components/inputs/JobTitle';
import Phone from './components/inputs/Phone';
import Email from './components/inputs/Email';
import Github from './components/inputs/Github';
import PersonalWebsite from './components/inputs/PersonalWebsite';
import Location from './components/inputs/Location';
import ProfileSummary from './components/inputs/ProfileSummary';
import AddItemButton from './components/AddItemButton';
import InnerAccordionMenu from './components/InnerAccordionMenu';
import SkillMenu from './components/SkillMenu';
import { v4 as uuid } from 'uuid' ;


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [github, setGithub] = useState("");
  const [personalWebsite, setPersonalWebsite] = useState("");
  const [location, setLocation] = useState("");
  
  const [profileSummary, setProfileSummary] = useState("");
  
  const [jobs, setJobs] = useState([{ id: uuid(), deleteAction: deleteJob, type: 'inner', child: {}}]); 

  const [education, setEducation] = useState([{ id: uuid(), deleteAction: deleteEducation, type: 'inner', child: {}}]); 

  const [skills, setSkills] = useState([{ id: uuid(), deleteAction: deleteSkill, content: ''}]);

  const jobsRef = useRef(jobs); 
  const educationRef = useRef(education); 
  const skillsRef = useRef(skills); 
  

  useEffect(() => {
    jobsRef.current = jobs; 
  }, [jobs]); 

  useEffect(() => {
    educationRef.current = education; 
  }, [education]); 

  useEffect(() => {
    skillsRef.current = skills; 
  }, [skills]); 

  useEffect(() =>{
    jobs.forEach((job, index)=> console.log(`job ${index + 1} position: ${job.child.position}`));
  }, [jobs])

  useEffect(
    () =>{
      skills.forEach((skill, index)=>console.log(`skill ${index+1}: ${skill.content}`));
    }, [skills]
  )

  
  function addJob(){
    /* jobs array will just be an array of objects with an id generated from uuid. Then link the key(and possibly 'number') to id. */
    setJobs(c=> {
      const newArr = [...c, {id: uuid(), deleteAction: deleteJob, type: 'inner', child: {}}
    ]; 
    return newArr;
    })
  };

  function addEducation(){
    setEducation(c=>{
      const newArr = [...c, {id: uuid(), deleteAction: deleteEducation, type: 'inner', child: {}}
    ]; 
    return newArr;
    })
  };

  function addSkill(){
    setSkills(c=>{
      const newArr = [...c, { id: uuid(), deleteAction: deleteSkill, content: ''}

      ]; 
      return newArr;
    }

    )
  }
  
  function deleteJob(e){
    /* find index of object whose id is the same as e.target.closest('[data-number]').dataset.number) then remove it*/
    const prevArr = [...jobsRef.current];
    const itemToDelete = prevArr.findIndex((element) => element.id === e.target.closest('[data-number]').dataset.number);  
    // console.log(`index of item to delete: ${itemToDelete}`);
    prevArr.splice(itemToDelete, 1);  
    setJobs(prevArr);  
  }
  
  function deleteEducation(e){
    /* find index of object whose id is the same as e.target.closest('[data-number]').dataset.number) then remove it*/
    const prevArr = [...educationRef.current];
    const itemToDelete = prevArr.findIndex((element) => element.id === e.target.closest('[data-number]').dataset.number);  
    // console.log(`index of item to delete: ${itemToDelete}`);
    prevArr.splice(itemToDelete, 1);  
    setEducation(prevArr);  
  }

  function deleteSkill(e){
    const prevArr = [...skillsRef.current]; 
    const itemToDelete= prevArr.findIndex(element=> element.id === e.target.closest('[data-id]').dataset.id); 
    prevArr.splice(itemToDelete, 1); 
    setSkills(prevArr);
  }

  
  function RenderJob({ job }){
    return(
      <div>
        <p>{job.position}</p>
        <p>{job.company}</p>
        <p>{job.startDate}</p>
        <p>{job.endDate}</p>
        <p>{job.description}</p>
      </div>
  )
  }

  function RenderSkills(){
    return(
      <div>
        <ul>
          {
            skills.map(
              skill=>{
                return(
                  <li>{skill.content}</li>
                )
              }
            )
          }
        </ul>
      </div>
    )
  }

  function RenderEducation({ edu }){
    return(
      <div>
        <p>{edu.school}</p>
        <p>{edu.course}</p>
        <p>{edu.startDate}</p>
        <p>{edu.endDate}</p>
        <p>{edu.description}</p>
      </div>
  )
  }
  

  return ( 
    <div className='main'>

      <AccordionMenu>

        <Accordion title='Personal Information'>
          <div className="input-menu">
            <div className="input-menu-layer-shared">
                <FirstName setter={setFirstName} value={firstName}/>
                <LastName setter={setLastName} value={lastName}/>
            </div>
            <JobTitle setter={setJobTitle}/>
            <div className="input-menu-layer-shared">
                <Phone setter={setPhoneNumber} value={phoneNumber}/>
                <Email setter={setEmailAddress} value={emailAddress}/>
            </div>
            <div className="input-menu-layer-shared">
                <Github setter={setGithub} value={github}/>
                <PersonalWebsite setter={setPersonalWebsite} value={personalWebsite}/>
            </div>
            <Location setter={setLocation} value={location}/>
          </div>
        </Accordion>

        <Accordion title='Profile Summary'>
          <div className='input-menu'>
            <ProfileSummary setter={setProfileSummary} value={profileSummary}/>
          </div>
        </Accordion>
        
        <Accordion title='Work Experience'>
          <div className='input-menu'>
            <InnerAccordionMenu objArray={jobs} setObjContent={setJobs} type='work'/>
            <AddItemButton title="Add Work Experience" addAction={addJob}/>
          </div>
        </Accordion>

        <Accordion title='Education'>
          <div className='input-menu'>
            <InnerAccordionMenu objArray={education} setObjContent={setEducation} type='education'/>
            <AddItemButton title="Add Education" addAction={addEducation}/>
          </div>
        </Accordion>

        <Accordion title='Skills'>
          <div className='input-menu'>
            <SkillMenu skillArray={skills} setSkillContent={setSkills}/>
            <AddItemButton title="Add Skill" addAction={addSkill}/>
          </div>
        </Accordion>

        <Accordion title='More'>
          <div className='input-menu'>
            <AddItemButton title="Add Section" addAction={null}/>
          </div>
        </Accordion>
        

      </AccordionMenu>
      <DummyPDF>
        <p>{ firstName }</p>
        <p>{ lastName }</p>
        <p>{ jobTitle }</p>
        <p>{ phoneNumber }</p>
        <p>{ emailAddress }</p>
        <p>{ github }</p>
        <p>{ personalWebsite }</p>
        <p>{ location }</p>
        <p>{ profileSummary }</p>
        <h1>Work Experience</h1>
        {jobs.map(job => <RenderJob job={job.child} key={job.id}/>)}
        <h1>Education</h1>
        {education.map(edu => <RenderEducation edu={edu.child} key={edu.id}/>)}
        <h1>Skills</h1>
        {RenderSkills()}
      </DummyPDF>

    </div>
  )
}

export default App
