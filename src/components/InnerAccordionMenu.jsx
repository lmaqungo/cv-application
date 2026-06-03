import { useState, useEffect } from 'react'
import Accordion from './Accordion'
import WorkExperience from './inputs/WorkExperience';
import Education from './inputs/Education';
import Section from './Section/Section';



const InnerAccordionMenu = ({ objArray, setObjContent, type }) => {

    const [activeAccordion, setActiveAccordion] = useState(null);
    const [activeAccordionId, setActiveAccordionId] = useState(null);

    function handleClick(id) {
    setActiveAccordion(activeAccordion === id ? null : id); 
    }

    // useEffect(()=> console.log(`Open accordion id: ${activeAccordionId}`), [activeAccordionId]);

    useEffect(() => {
        console.log('List container mounted');
        return () => console.log('List container unmounted');
    }, []);

    function renderJobs(){
       const arr = objArray.map(job=>{ return(
            
            <Accordion id={job.id} title={(job.child.position || job.child.company) ? ((job.child.position && job.child.company) ? `${job.child.position}, ${job.child.company}` : `${(job.child.position && job.child.position)} ${(job.child.company && job.child.company)}`) : 'Job position, Company'} isActive = {activeAccordion === job.id} onShow = {handleClick} type='inner' number={job.id} deleteAction={job.deleteAction} key={job.id} accordionIdSetter={setActiveAccordionId}>
                <WorkExperience activeObjId={activeAccordionId}  setJobContent={setObjContent} jobsArray={objArray}/>
            </Accordion>
            )
            
            }

        )
        return arr
    }

    function renderEducation(){
       const arr = objArray.map(edu=>{ return(
            
            <Accordion id={edu.id} title={(edu.child.school || edu.child.course) ? ((edu.child.school && edu.child.course) ? `${edu.child.school}, ${edu.child.course}` : `${(edu.child.school && edu.child.school)} ${(edu.child.course && edu.child.course)}`) : 'School Name, Course'} isActive = {activeAccordion === edu.id} onShow = {handleClick} type='inner' number={edu.id} deleteAction={edu.deleteAction} key={edu.id} accordionIdSetter={setActiveAccordionId}>
                <Education activeObjId={activeAccordionId}  setEducationContent={setObjContent} educationArray={objArray}/>
            </Accordion>
            )
            
            }

        )
        return arr
    }

    function renderSections(){
        const arr = objArray.map(section=>{ return(
            
            <Accordion id={section.id} title={!section.sectionName ? 'Section' : section.sectionName} isActive = {activeAccordion === section.id} onShow = {handleClick} type='inner' number={section.id} deleteAction={section.deleteAction} key={section.id} accordionIdSetter={setActiveAccordionId}>
                <Section section={section}  setSectionContent={setObjContent}/>
            </Accordion>
            )
            
            }

        )
        return arr
    }

    function renderChildren(){
        switch(type){
            case 'work':
                // console.log('work!');
                return renderJobs();
            case 'education':
                // console.log('education!'); 
                return renderEducation();
            case 'sections':
                return renderSections();
        }
    }



    return (
        <div className="container">
            {renderChildren()}
        </div>
    )   


  
}

export default InnerAccordionMenu