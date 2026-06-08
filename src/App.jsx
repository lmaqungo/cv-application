import { useState, useEffect, useRef, useContext } from 'react';
import './App.css';
import AccordionMenu from './components/AccordionMenu';
import DummyPDF from './components/DummyPDF';
import Accordion from './components/Accordion';

import Toolbar from './components/tools/Toolbar';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';

import { InputValuesContext } from './context/InputValuesContext';

function App() {

  const {jobs, education, person, skills, sections, toggleEdit, contentRef} = useContext(InputValuesContext)
 
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

  function RenderJob({ job }){
    return(
      <div className='section-gap'>
        <div className="upper-content">
          <p className='bold normal-text' >{job.company}</p>
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

  
  return ( 
    <>
      <AccordionMenu show={toggleEdit} />
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
                { jobs.map(job => <RenderJob job={job} key={job.id}/>) }
              </div>
            </div>
            {education.length > 0 && <hr className="dotted-line"/>}
            <div className="section">
              {education.length>0 && <h1 className="header">Education</h1>}
              <div className="body">
                { education.map(edu => <RenderEducation edu={edu} key={edu.id}/>) }
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
      <Toolbar />
    </>
  )
}

export default App


