import InputField from "../inputs/InputField"; 
import TextArea from "../inputs/TextArea"; 


const Education = ( { edu, setEducation }) => {

  function handleTyping(e){
    setEducation(prevEducationArr => {
      return prevEducationArr.map(eduObj => {
        if(eduObj.id === edu.id) {
          return {
            ...eduObj, 
            [e.target.name] : e.target.value
          }
        } else{
          return eduObj
        }
      })
    }
    )
  }

  return (
    <div class='input-menu'>
        <div className="input-menu-layer-shared">
          <InputField
            label='School' 
            handleTyping = {handleTyping}
            value = {edu.school}
            name = 'school'
          />
          <InputField
            label='Course' 
            handleTyping = {handleTyping}
            value = {edu.company}
            name = 'course'
          />
        </div>
        <div className="input-menu-layer-shared">
          <InputField
            label='Start Date' 
            handleTyping = {handleTyping}
            value = {edu.startDate}
            name = 'startDate'
          />
          <InputField
            label='End Date' 
            handleTyping = {handleTyping}
            value = {edu.endDate}
            name = 'endDate'
          />
        </div>
        <TextArea
          label = 'Description'
          handleTyping={handleTyping}
          rows={5}
          value = {edu.description}
          name = 'description'
        />
    </div>
  )
}

export default Education