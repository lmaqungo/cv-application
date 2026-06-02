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
import Tool from './components/Tool';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
import { generateDefaultValues } from './default';



function App() {

  const templateJob = (position='', company='', startDate='', endDate='', description='') => {
    return{
      id: uuid(), 
      deleteAction: deleteJob, 
      child: {
        position: position,
        company: company,
        startDate: startDate,
        endDate: endDate,
        description: description
      }
    }
  };

  const templateEducation = (school='', course='', startDate='', endDate='', description='') => {
    return{
      id: uuid(), 
      deleteAction: deleteEducation, 
      child: {
        school: school, 
        course: course, 
        startDate: startDate, 
        endDate: endDate, 
        description: description
      }
    }
  };

  const templateSkill = (content='') => {
    return{
      id: uuid(), 
      deleteAction: deleteSkill, 
      content: content
    }
  };

  const templateSection = (sectionName='') => {
    return{
      id: uuid(), 
      sectionName: sectionName, 
      deleteAction: deleteSection, 
      sectionItems: [],
      linkItems: []
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [github, setGithub] = useState("");
  const [personalWebsite, setPersonalWebsite] = useState("");
  const [location, setLocation] = useState("");
  
  const [profileSummary, setProfileSummary] = useState("");
  
  const [jobs, setJobs] = useState([templateJob()]); 

  const [education, setEducation] = useState([templateEducation()]); 

  const [skills, setSkills] = useState([]);

  const [sections, setSections] = useState([]);

  const jobsRef = useRef(jobs); 
  const educationRef = useRef(education); 
  const skillsRef = useRef(skills); 
  const sectionsRef = useRef(sections);

  
  const contentRef = useRef(null);
  const reactToPrintContent = () => {
    return contentRef.current;
  }

  const handlePrint = useReactToPrint({
    documentTitle: 'untitled cv', 
    openWindow: true,
    pageStyle: `
    @page { margin: 0; }
    @media print {
      html, body {
        width: 210mm !important;
        height: 297mm !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      #page {
        width: 210mm !important;
        height: 297mm !important;
        padding: 32px !important;
        box-sizing: border-box !important;
        transform: scale(0.5) !important;
        transform-origin: top left;
      }
        .header{
          font-size: 30px;
        }
      * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      }
    }
  `,
  });

  /*
    use the pageStyle property to style the font size of the @media print. Give the html text tags a classname that is
    associated with a particular font size.  
  */

  useEffect(() => {
    jobsRef.current = jobs; 
  }, [jobs]); 

  useEffect(() => {
    educationRef.current = education; 
  }, [education]); 

  useEffect(() => {
    skillsRef.current = skills; 
  }, [skills]); 

  useEffect(() => {
    sectionsRef.current = sections; 
  }, [sections]); 

  useEffect(() =>{
    jobs.forEach((job, index)=> console.log(`job ${index + 1} position: ${job.child.position}`));
  }, [jobs])

  useEffect(
    () =>{
      skills.forEach((skill, index)=>console.log(`skill ${index+1}: ${skill.content}`));
    }, [skills]
  )

  
  function addJob(){
    setJobs(c=> {
      const newArr = [...c, templateJob()
    ]; 
    return newArr;
    })
  };

  function addEducation(){
    setEducation(c=>{
      const newArr = [...c, templateEducation()
    ]; 
    return newArr;
    })
  };

  function addSkill(){
    setSkills(c=>{
      const newArr = [...c, templateSkill()
      ]; 
      return newArr;
    }

    )
  }

  function addSection(){
    setSections(c=>{
      const newArr = [...c, templateSection()
    ]; 
    return newArr;
    })
  }
  
  function deleteJob(e){
    const prevArr = [...jobsRef.current];
    const itemToDelete = prevArr.findIndex((element) => element.id === e.target.closest('[data-number]').dataset.number);  
    prevArr.splice(itemToDelete, 1);  
    setJobs(prevArr);  
  }
  
  function deleteEducation(e){
    const prevArr = [...educationRef.current];
    const itemToDelete = prevArr.findIndex((element) => element.id === e.target.closest('[data-number]').dataset.number);  
    prevArr.splice(itemToDelete, 1);  
    setEducation(prevArr);  
  }

  function deleteSkill(e){
    const prevArr = [...skillsRef.current]; 
    const itemToDelete= prevArr.findIndex(element=> element.id === e.target.closest('[data-id]').dataset.id); 
    prevArr.splice(itemToDelete, 1); 
    setSkills(prevArr);
  }

  function deleteSection(e){
    const prevArr = [...sectionsRef.current]; 
    const itemToDelete = prevArr.findIndex((element) => element.id === e.target.closest('[data-number]').dataset.number);  
    prevArr.splice(itemToDelete, 1);  
    setSections(prevArr);  
  }

  
  function RenderJob({ job }){
    return(
      <div className='section-gap'>
        <div className="upper-content">
          <p className='bold'>{job.company}</p>
          <p>{`${job.startDate}-${job.endDate}`}</p>
        </div>
        <p>{job.position}</p>
        <ul>
          {job.description.split('\n').map(point=>{
            return(
              <li>{point}</li>
            )
          }
          )}
        </ul>
      </div>
  )
  }

  function RenderSkills(){
    return(
      <div className='section'>
        <h1 className="header">Skills</h1>
        <div className="body">
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
      </div>
    )
  }

  function RenderEducation({ edu }){
    return(
      <div className='section-gap'>
        <div className="upper-content">
          <p className='bold' >{edu.school}</p>
          <p>{`${edu.startDate}-${edu.endDate}`}</p>
        </div>
        <p>{edu.course}</p>
        <ul>
          {edu.description.split('\n').map(point=>{
            return(
              <li>{point}</li>
            )
          }
          )}
        </ul>
      </div>
  )
  }

  function RenderSection({ section, addRule }){
    return(
      <>
      <div className='section'>
        <h1 className='header'>{section.sectionName}</h1>
        <div className="body">
          <ul>
            {section.sectionItems && 
              section.sectionItems.map(
                sectionItem=>{
                  return(
                    <li key={sectionItem.id}>{sectionItem.content}</li>
                  )
                }
              )
            }
          </ul>
        </div>
      </div>
      {addRule && <hr className='dotted-line'/>}
      </>
    )
  }

  const setDefaults = () => {

    const defaultValues = generateDefaultValues();

    setFirstName(defaultValues.firstName);
    setLastName(defaultValues.lastName);
    setJobTitle(defaultValues.jobTitle);
    setPhoneNumber(defaultValues.phoneNumber);
    setEmailAddress(defaultValues.emailAddress);
    setGithub(defaultValues.github);
    setPersonalWebsite(defaultValues.personalWebsite);
    setLocation(defaultValues.location);
    setProfileSummary(defaultValues.profileSummary);
    setJobs(
      [
        templateJob(
          defaultValues.job1.position,
          defaultValues.job1.company,
          defaultValues.job1.startDate,
          defaultValues.job1.endDate,
          defaultValues.job1.description,
        )
      ]
    )
    setEducation(
      [
        templateEducation(
          defaultValues.education1.school,
          defaultValues.education1.course,
          defaultValues.education1.startDate,
          defaultValues.education1.endDate,
          defaultValues.education1.description,
        )
      ]
    )
    
  }


  const downloadPDF = ()=> {
    console.log('download button clicked');
    const cv = document.querySelector('#page'); 
    html2canvas(cv).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4", true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = (pdfHeight - imgHeight * ratio) / 2;
        pdf.addImage(
          imgData, 
          'PNG', 
          imgX, 
          imgY, 
          imgWidth * ratio, 
          imgHeight * ratio
        ); 
        pdf.save("Untitled-cv.pdf");
    }
    ); 
    console.log('download process complete')
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
            <JobTitle setter={setJobTitle} value={jobTitle}/>
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
            <InnerAccordionMenu objArray={sections} setObjContent={setSections} type='sections'/>
            <AddItemButton title="Add Section" addAction={addSection}/>
          </div>
        </Accordion>
        

      </AccordionMenu>
      <DummyPDF ref={contentRef}>
        <div className="cv-header">
          <h1 id='name'>{`${firstName} ${lastName}`}</h1> 
          <h1 className='job-title'>{ jobTitle }</h1>
        </div>
        <div className="cv-main">

          <div className="left">
            <div className="section">
              {profileSummary && <h1 className='header'>Profile</h1>}
              <div className="body">
                <p id='profile' >{ profileSummary }</p>
              </div>
            </div>
            {jobs.length> 0 && <hr className='dotted-line'/>}
            <div className="section">
              {jobs.length> 0 && <h1 className="header">Work Experience</h1>}
              <div className="body">
                { jobs.map(job => <RenderJob job={job.child} key={job.id}/>) }
              </div>
            </div>
            {education.length > 0 && <hr className="dotted-line"/>}
            <div className="section">
              {education.length>0 && <h1 className="header">Education</h1>}
              <div className="body">
                { education.map(edu => <RenderEducation edu={edu.child} key={edu.id}/>) }
              </div>
            </div>
          </div>

          <div className="right">
            <div className="section">
              { (phoneNumber || emailAddress || personalWebsite || github || location) && <h1 className='header'>Contact</h1>}
              <div className='body'>
                <p>{ phoneNumber }</p>
                <p>{ emailAddress }</p>
                <p>{ personalWebsite }</p>
                <p>{ github }</p>
                <p>{ location }</p>
              </div>
            </div>
            { (sections.length > 0 || skills.length > 0) && <hr className='dotted-line'/>}
            {skills.length>0 && RenderSkills()}
            {sections.length > 0 && <hr className='dotted-line'/>}
            { sections.map((section, index)=> <RenderSection section={section} key={section.id} addRule={index!==sections.length-1}/>)}
          </div>
        </div>
      </DummyPDF>
      <div className="toolbar">
        <Tool type='refresh' buttonAction={setDefaults}/>
        <Tool type='print' buttonAction={() => handlePrint(reactToPrintContent)}/>
      </div>

    </div>
  )
}

export default App

/* 
TO DO: 
Add all default input
Think about all default inputs. Might be better to put it all inside a function component that returns an object so that I just need to change the inputs there.   
Increase font size for print
Create delete input function
Create restart input function
*/
