import { useState } from 'react'
import WorkExperienceAccordion from './workExperience/WorkExperienceAccordion';
import EducationAccordion from './education/EducationAccordion';
import PersonalInformationAccordion from './personalInformation/PersonalInformationAccordion';
import ProfileSummaryAccordion from './profileSummary/ProfileSummaryAccordion';
import SkillsAccordion from './skills/SkillsAccordion';
import MoreAccordion from './more/MoreAccordion';


const AccordionMenu = ({ show }) => {

  const [activeAccordion, setActiveAccordion] = useState(1);

  function handleClick(id) {
    setActiveAccordion(activeAccordion === id ? null : id); 
  }

  return ( 
    <div className={`accordion-container ${!show && 'hide' } `}>
      <PersonalInformationAccordion activeAccordion={activeAccordion} handleClick={handleClick} />
      <ProfileSummaryAccordion activeAccordion={activeAccordion} handleClick={handleClick} />
      <WorkExperienceAccordion activeAccordion={activeAccordion} handleClick={handleClick} />
      <EducationAccordion activeAccordion={activeAccordion} handleClick={handleClick} />
      <SkillsAccordion activeAccordion={activeAccordion} handleClick={handleClick} />
      <MoreAccordion activeAccordion={activeAccordion} handleClick={handleClick} />
    </div>
  )
}

export default AccordionMenu