import React from 'react'
import { useContext, useState } from "react";
import { v4 as uuid } from 'uuid'
import { InputValuesContext } from "../../context/InputValuesContext";
import Accordion from '../Accordion';
import Education from './Education';
import AddItemButton from '../AddItemButton';

const EducationAccordion = ({ activeAccordion, handleClick }) => {

  const { education, setEducation } = useContext(InputValuesContext)

  const [activeInnerAccordion, setActiveInnerAccordion] = useState(null);

  const templateEducation = (school='', course='', startDate='', endDate='', description='') => {
    return{
      id: uuid(), 
      school: school, 
      course: course, 
      startDate: startDate, 
      endDate: endDate, 
      description: description
    }
  };

  function handleInnerClick(id) {
    setActiveInnerAccordion(activeInnerAccordion === id ? null : id); 
  };

  function addEducation(){
    setEducation(prevEdu => [...prevEdu, templateEducation()])
  }

  function deleteEducation(eduId){
    setEducation(prev => prev.filter(edu => edu.id!== eduId))
  }

  function renderEducation(){
    return education.map( edu =>
      <Accordion title={(edu.school || edu.course) ? ((edu.school && edu.course) ? `${edu.school}, ${edu.course}` : `${(edu.school && edu.school)} ${(edu.course && edu.course)}`) : 'School Name, Course'} isActive = {activeInnerAccordion === edu.id} onShow = { () => handleInnerClick(edu.id) } type='inner' deleteAction={ () => deleteEducation(edu.id) } key={edu.id}  >
        <Education key={edu.id} edu={edu}  setEducation={setEducation}  />
      </Accordion>
    )
  }

  return (
    <Accordion title='Education' isActive = {activeAccordion === 2} onShow={ () => handleClick(2) } >
      <div className="input-menu" >
          <div className="container" >
            {renderEducation()}
          </div>
          <AddItemButton title='Add Education' addAction={addEducation} />
      </div>
    </Accordion>
  )
}

export default EducationAccordion