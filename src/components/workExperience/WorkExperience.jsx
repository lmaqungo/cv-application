import InputField from "../inputs/InputField"; 
import TextArea from "../inputs/TextArea"; 

const WorkExperience = ( { job, setJobs }) => {
  
  function handleTyping(e){
    setJobs(prevJobs => {
      return prevJobs.map(jobObj => {
        if(jobObj.id === job.id) {
          return {
            ...jobObj, 
            [e.target.name] : e.target.value
          }
        } else{
          return jobObj
        }
      })
    }
    )
  }

  return (
    <div class='input-menu'>
        <div className="input-menu-layer-shared">
          <InputField
            label='Position' 
            handleTyping = {handleTyping}
            value = {job.position}
            name = 'position'
          />
          <InputField
            label='Company' 
            handleTyping = {handleTyping}
            value = {job.company}
            name = 'company'
          />
        </div>
        <div className="input-menu-layer-shared">
          <InputField
            label='Start Date' 
            handleTyping = {handleTyping}
            value = {job.startDate}
            name = 'startDate'
          />
          <InputField
            label='End Date' 
            handleTyping = {handleTyping}
            value = {job.endDate}
            name = 'endDate'
          />
        </div>
        <TextArea
          label = 'Description'
          handleTyping={handleTyping}
          rows={5}
          value = {job.description}
          name = 'description'
        />
    </div>
  )
}

export default WorkExperience