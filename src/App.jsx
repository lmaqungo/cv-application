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
import WorkExperience from './components/inputs/WorkExperience';
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

  const [jobContent, setJobContent] = useState([]);
  
  const [jobs, setJobs] = useState([{ id: uuid()}, { id: uuid()}, { id: uuid()} ]); 
  const jobsRef = useRef(jobs); 
  

  useEffect(() => {
    jobsRef.current = jobs; 
    console.log(`length: ${jobs.length}`);
  }, [jobs]); 


  
  function addJob(){
    /* jobs array will just be an array of objects with an id generated from uuid. Then link the key(and possibly 'number') to id. */
    setJobs(c=> {
      const newArr = [...c, {id: uuid()}
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
      const itemToDelete = jobsRef.current.findIndex((element) => element.props.number === e.target.closest('[data-number]').dataset.number);  
      
      console.log(`deleted item index: ${itemToDelete}`); 
      jobsRef.current.splice(itemToDelete, 1); 
      setJobs(jobsRef.current); 
  }

  function renderAccordions(){
    const accordionArr = jobs.map(job=> {return(
                  <Accordion title="Job Position, Company" type="inner" number={job.id} deleteAction={deleteJob} key={job.id}>
                    <WorkExperience setterFn={setJobContent} jobsArr={jobsRef.current}/>
                  </Accordion>
                )}); 
    console.log(accordionArr.forEach(job=> console.log(`job: ${job}, job is an Accordion?: ${job.type===Accordion}`)));
    return accordionArr;
  }

  const testAccordions = renderAccordions(); 
  // console.log(testAccordions.forEach(job=> console.log(`Job title: ${job.props.number}`)));


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
            <AccordionMenu type='dynamic'>
              /* map the objects in the array to the accordions and Work Experience*/ 
                {/* {jobs.map(job=> {return(
                  <Accordion title="Job Position, Company" type="inner" number={job.id} deleteAction={deleteJob} key={job.id}>
                    <WorkExperience setterFn={setJobContent} jobsArr={jobsRef.current}/>
                  </Accordion>
                )})} */}
                {testAccordions}
            </AccordionMenu>
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
        {jobContent.map(job => <RenderJob job={job} key={job.id}/>)}
      </DummyPDF>

    </div>
  )
}

export default App
