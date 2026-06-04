import { useState, useEffect, useRef } from 'react';
import './App.css';
import AccordionMenu from './components/AccordionMenu';
import DummyPDF from './components/DummyPDF';
import Accordion from './components/Accordion';
import FirstName from './components/personalInformation/FirstName';
import LastName from './components/personalInformation/LastName';
import JobTitle from './components/personalInformation/JobTitle';
import Phone from './components/personalInformation/Phone';
import Email from './components/personalInformation/Email';
import Github from './components/personalInformation/Github';
import PersonalWebsite from './components/personalInformation/PersonalWebsite';
import Location from './components/personalInformation/Location';
import ProfileSummary from './components/profileSummary/ProfileSummary';

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

  const templateSection = (sectionName='', sectionItems = [], linkItems = []) => {
    return{
      id: uuid(), 
      sectionName: sectionName, 
      deleteAction: deleteSection, 
      addSectionItem: addSectionItem,  
      addLinkItem: addLinkItem, 
      sectionItems: sectionItems,
      linkItems: linkItems
    }
  };

  const [jobs, setJobs] = useState([templateJob()]); 

  const [education, setEducation] = useState([templateEducation()]); 

  const [skills, setSkills] = useState([]);

  const [sections, setSections] = useState([]);

  const [toggleEdit, setToggleEdit] = useState(true);

  useEffect(() => console.log(`show accordion? ${toggleEdit}`), [toggleEdit])

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

  const jobsRef = useRef(jobs); 
  const educationRef = useRef(education); 
  const skillsRef = useRef(skills); 
  const sectionsRef = useRef(sections);

  const contentRef = useRef(null);
  // above statement is need for react-to-print

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

  const templateSectionItem = (content='') => {
        return{
            id: uuid(), 
            deleteAction: deleteSectionItem, 
            content: content
        }
    };

    const templateLinkItem = (href='', linkContent='') => {
        return{
            id: uuid(), 
            deleteAction: deleteLinkItem, 
            href: href, 
            linkContent: linkContent
        }
    };

    function addSectionItem(section){

        setSections((prevSectionArray)=> {
            return prevSectionArray.map(sectionObj => {
                if(sectionObj.id === section.id) {

                    return {...sectionObj, sectionItems: [...sectionObj.sectionItems, templateSectionItem()] }
                } else {
                    return sectionObj
                }
        })
    })

  }

  function addLinkItem(section){
     setSections((prevSectionArray)=> {
        return prevSectionArray.map(sectionObj => {
            if(sectionObj.id === section.id) {

                return {...sectionObj, linkItems: [...sectionObj.linkItems, templateLinkItem()] }
            } else {
                return sectionObj
            }
        })
    })
  }

  function deleteSectionItem(sectionItemId, section){
    
      setSections(prevArray => {
          return prevArray.map(sectionObj => {
              if(sectionObj.id === section.id){
                  const prevSectionItemsArr = [...sectionObj.sectionItems]
                  const itemToDelete = prevSectionItemsArr.findIndex(
                      element => element.id === sectionItemId
                  ); 
                  prevSectionItemsArr.splice(itemToDelete, 1);
                  return {...sectionObj, sectionItems: prevSectionItemsArr}
              } else {
                  return sectionObj
              }
          })
      })
  }

  function deleteLinkItem(linkItemId, section){

    setSections(prevArray => {
        return prevArray.map(sectionObj => {
            if(sectionObj.id === section.id){
                const prevLinkItemsArr = [...sectionObj.linkItems]
                const itemToDelete = prevLinkItemsArr.findIndex(
                    element => element.id === linkItemId
                ); 
                prevLinkItemsArr.splice(itemToDelete, 1);
                return {...sectionObj, linkItems: prevLinkItemsArr}
            } else {
                return sectionObj
            }
        })
      })
  }

  function RenderJob({ job }){
    return(
      <div className='section-gap'>
        <div className="upper-content">
          <p className='bold normal-text'>{job.company}</p>
          <p className='normal-text' >{`${job.startDate}-${job.endDate}`}</p>
        </div>
        <p className='normal-text' >{job.position}</p>
        <ul>
          {job.description.split('\n').map(point=>{
            return(
              <li className='normal-text' >{point}</li>
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
                    <li className='normal-text' >{skill.content}</li>
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
          <p className='bold normal-text' >{edu.school}</p>
          <p className='normal-text' >{`${edu.startDate}-${edu.endDate}`}</p>
        </div>
        <p className='normal-text' >{edu.course}</p>
        <ul>
          {edu.description.split('\n').map(point=>{
            return(
              <li className='normal-text' >{point}</li>
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
        <div>
          <ul>
            {section.sectionItems && 
              section.sectionItems.map(
                sectionItem=>{
                  return(
                    <li className='normal-text brown' key={sectionItem.id}>{sectionItem.content}</li>
                  )
                }
              )
            }
          </ul>
          <ul >
            {section.linkItems && 
              section.linkItems.map(
                linkItem=>{
                  return(
                    <li  className='normal-text brown' key={linkItem.id}>
                      <a className='no-link-styling' href={linkItem.href}>{linkItem.linkContent}</a>
                    </li>
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

    setPerson({
      firstName: defaultValues.firstName,
      lastName: defaultValues.lastName, 
      jobTitle: defaultValues.jobTitle, 
      phone: defaultValues.phoneNumber, 
      email: defaultValues.emailAddress, 
      github: defaultValues.github,
      website: defaultValues.personalWebsite, 
      location: defaultValues.location, 
      profileSummary: defaultValues.profileSummary,
    })

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
    setSections(
      [
        templateSection(
          defaultValues.section1.sectionName, 
          [],
          defaultValues.section1.linkItems.map(item => templateLinkItem(item.href, item.linkContent) )
        )
      ]
    )
    
  }

  function handleTyping(e){
    setPerson(
      {
        ...person, 
        [e.target.name]: e.target.value
      }
    )
  }

  return ( 
    <>
      <AccordionMenu show={toggleEdit} >

        <Accordion title='Personal Information'>
          <div className="input-menu">
            <div className="input-menu-layer-shared">
                <FirstName onChange={handleTyping} value={person.firstName}/>
                <LastName onChange={handleTyping} value={person.lastName}/>
            </div>
            <JobTitle onChange={handleTyping} value={person.jobTitle}/>
            <div className="input-menu-layer-shared">
                <Phone onChange={handleTyping} value={person.phone}/>
                <Email onChange={handleTyping} value={person.email}/>
            </div>
            <div className="input-menu-layer-shared">
                <Github onChange={handleTyping} value={person.github}/>
                <PersonalWebsite onChange={handleTyping} value={person.website}/>
            </div>
            <Location onChange={handleTyping} value={person.location}/>
          </div>
        </Accordion>

        <Accordion title='Profile Summary'>
          <div className='input-menu'>
            <ProfileSummary onChange={handleTyping} value={person.profileSummary} />
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
      <DummyPDF ref={contentRef} show={!toggleEdit}>
        <div className="cv-header">
          <h1 className='fullName'>{`${person.firstName} ${person.lastName}`}</h1> 
          <h1 className='header'>{ person.jobTitle }</h1>
        </div>
        <div className="cv-main">

          <div className="left">
            <div className="section">
              {person.profileSummary && <h1 className='header'>Profile</h1>}
              <div className="body">
                <p className='normal-text' >{ person.profileSummary }</p>
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
              { (person.phone || person.email || person.website || person.github || person.location) && <h1 className='header'>Contact</h1>}
              <div className='body'>
                <p className='normal-text brown' >{ person.phone }</p>
                <p className='normal-text brown' >{ person.email }</p>
                <p className='normal-text brown' >{ person.website }</p>
                <p className='normal-text brown' >{ person.github }</p>
                <p className='normal-text brown' >{ person.location }</p>
              </div>
            </div>
            { skills.length > 0 && <hr className='dotted-line'/>}
            {skills.length>0 && RenderSkills()}
            {sections.length > 0 && <hr className='dotted-line'/>}
            { sections.map((section, index)=> <RenderSection section={section} key={section.id} addRule={index!==sections.length-1}/>)}
          </div>
        </div>
      </DummyPDF>
      <div className="toolbar">
        <Tool type={toggleEdit ? 'edit' : 'view' } show={true} buttonAction={() => setToggleEdit(!toggleEdit)} />
        <Tool type='refresh' buttonAction={setDefaults}/>
        <Tool type='print'/>
      </div>

    </>
  )
}

export default App


