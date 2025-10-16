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
  const jobsRef = useRef(jobs); 
  

  useEffect(() => {
    jobsRef.current = jobs; 
  }, [jobs]); 

  useEffect(() =>{
    jobs.forEach((job, index)=> console.log(`job ${index + 1} position: ${job.child.position}`));
  }, [jobs])

  
  function addJob(){
    /* jobs array will just be an array of objects with an id generated from uuid. Then link the key(and possibly 'number') to id. */
    setJobs(c=> {
      const newArr = [...c, {id: uuid(), deleteAction: deleteJob, type: 'inner', child: {}}
    ]; 
    return newArr
    })
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

  function deleteJob(e){
    /* find index of object whose id is the same as e.target.closest('[data-number]').dataset.number) then remove it*/
      const prevArr = [...jobsRef.current];
      const itemToDelete = prevArr.findIndex((element) => element.id === e.target.closest('[data-number]').dataset.number);  
      // console.log(`index of item to delete: ${itemToDelete}`);
      prevArr.splice(itemToDelete, 1);  
      setJobs(prevArr);  
  }

  

  return ( 
    <div className='main'>

      <AccordionMenu>

        <Accordion title='Personal Information'>
          <div className="input-menu">
            <div className="input-menu-layer-shared">
                <FirstName setter={setFirstName} value={firstName}/>
                <LastName setter={setLastName}/>
            </div>
            <JobTitle setter={setJobTitle}/>
            <div className="input-menu-layer-shared">
                <Phone setter={setPhoneNumber}/>
                <Email setter={setEmailAddress}/>
            </div>
            <div className="input-menu-layer-shared">
                <Github setter={setGithub}/>
                <PersonalWebsite setter={setPersonalWebsite}/>
            </div>
            <Location setter={setLocation}/>
          </div>
        </Accordion>

        <Accordion title='Profile Summary'>
          <div className='input-menu'>
            <ProfileSummary setter={setProfileSummary}/>
          </div>
        </Accordion>
        
        <Accordion title='Work Experience'>
          <div className='input-menu'>
            <InnerAccordionMenu jobsArray={jobs} setJobContent={setJobs}/>
            <AddItemButton title="Add Work Experience" addJob={addJob}/>
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
      </DummyPDF>

    </div>
  )
}

export default App
