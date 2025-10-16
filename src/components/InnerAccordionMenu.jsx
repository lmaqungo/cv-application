import { useState, useEffect } from 'react'
import Accordion from './Accordion'
import WorkExperience from './inputs/WorkExperience';
import React from 'react';



const InnerAccordionMenu = ({ jobsArray, setJobContent }) => {

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

    return (
        <div className="container">
            {jobsArray.map(job=>{ return(
            
            <Accordion id={job.id} title='Job Position, Company' isActive = {activeAccordion === job.id} onShow = {handleClick} type='inner' number={job.id} deleteAction={job.deleteAction} key={job.id} accordionIdSetter={setActiveAccordionId}>
                <WorkExperience activeObjId={activeAccordionId}  setJobContent={setJobContent}/>
            </Accordion>
            )
            
            }

            )}
        </div>
    )   


  
}

export default InnerAccordionMenu