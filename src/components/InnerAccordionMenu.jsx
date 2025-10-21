import { useState, useEffect } from 'react'
import Accordion from './Accordion'
import WorkExperience from './inputs/WorkExperience';
import Education from './inputs/Education';



const InnerAccordionMenu = ({ objArray, setObjContent, type }) => {

    const [activeAccordion, setActiveAccordion] = useState(null);
    const [activeAccordionId, setActiveAccordionId] = useState(null);

    function handleClick(id) {
    setActiveAccordion(activeAccordion === id ? null : id); 
    }

    useEffect(()=> console.log(`Open accordion id: ${activeAccordionId}`), [activeAccordionId]);

    useEffect(() => {
        console.log('List container mounted');
        return () => console.log('List container unmounted');
    }, []);

    function renderJobs(){
       const arr = objArray.map(job=>{ return(
            
            <Accordion id={job.id} title='Job Position, Company' isActive = {activeAccordion === job.id} onShow = {handleClick} type={job.type} number={job.id} deleteAction={job.deleteAction} key={job.id} accordionIdSetter={setActiveAccordionId}>
                <WorkExperience activeObjId={activeAccordionId}  setJobContent={setObjContent} jobsArray={objArray}/>
            </Accordion>
            )
            
            }

        )
        return arr
    }

    function renderEducation(){
       const arr = objArray.map(job=>{ return(
            
            <Accordion id={job.id} title='School Name, Course' isActive = {activeAccordion === job.id} onShow = {handleClick} type={job.type} number={job.id} deleteAction={job.deleteAction} key={job.id} accordionIdSetter={setActiveAccordionId}>
                <Education activeObjId={activeAccordionId}  setEducationContent={setObjContent} educationArray={objArray}/>
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
        }
    }



    return (
        <div className="container">
            {renderChildren()}
        </div>
    )   


  
}

export default InnerAccordionMenu