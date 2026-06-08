import { useContext, useState } from "react";
import Accordion from "../Accordion";
import WorkExperience from "./WorkExperience";
import AddItemButton from "../AddItemButton";
import { InputValuesContext } from "../../context/InputValuesContext";
import { templateJob } from "../../templates";

const WorkExperienceAccordion = ({ activeAccordion, handleClick }) => {

  const { jobs, setJobs } = useContext(InputValuesContext);

  const [activeInnerAccordion, setActiveInnerAccordion] = useState(null);

  function handleInnerClick(id) {
    setActiveInnerAccordion(activeInnerAccordion === id ? null : id); 
  };

  function addJob(){
    setJobs(prevJobs => [...prevJobs, templateJob()])
  }
  
  function deleteJob(jobId){
    setJobs(prevJobs => prevJobs.filter(job => job.id!== jobId))
  }

  function renderJobs(){
    return jobs.map( job => 
      
        <Accordion title={(job.position || job.company) ? ((job.position && job.company) ? `${job.position}, ${job.company}` : `${(job.position && job.position)} ${(job.company && job.company)}`) : 'Job position, Company'} isActive={activeInnerAccordion === job.id} onShow={()=> handleInnerClick(job.id)} type='inner' deleteAction={() => deleteJob(job.id) } key={job.id} >
          <WorkExperience key={job.id} job={job} setJobs={setJobs} />
        </Accordion>
    )
  }

  return (
    <Accordion title='Work Experience' isActive = {activeAccordion === 1} onShow={() => handleClick(1)} >
      <div className="input-menu" >
          <div className="container" >
            {renderJobs()}
          </div>
          <AddItemButton title='Add Work Experience' addAction={addJob} />
      </div>
    </Accordion>
  )
}

export default WorkExperienceAccordion