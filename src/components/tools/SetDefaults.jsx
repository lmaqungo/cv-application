import { useContext } from 'react'
import { InputValuesContext } from '../../context/InputValuesContext'
import { RefreshIcon } from '../../icons'
import defaultPerson from '../../default'
import { templateEducation, templateJob, templateSkill, templateSection, templateSectionItem, templateLinkItem } from '../../templates'

const SetDefaults = () => {

    const { setPerson, setJobs, setEducation, setSkills, setSections } = useContext(InputValuesContext)

    function onClick(){
        setPerson({
            firstName: defaultPerson.firstName, 
            lastName: defaultPerson.lastName, 
            jobTitle: defaultPerson.jobTitle, 
            phone: defaultPerson.phoneNumber, 
            email: defaultPerson.emailAddress, 
            github: defaultPerson.github,
            website: defaultPerson.website, 
            location: defaultPerson.location, 
            profileSummary: defaultPerson.profileSummary
        })
        setJobs(
            defaultPerson.jobs.map(job=> templateJob(
                job.position, 
                job.company, 
                job.startDate, 
                job.endDate, 
                job.description
            ))
        )
        setEducation(
            defaultPerson.education.map(edu=> templateEducation(
                edu.school, 
                edu.course, 
                edu.startDate, 
                edu.endDate, 
                edu.description
            ))
        )
        setSkills(
            defaultPerson.skills.map(skill => templateSkill(skill))
        )
        setSections(
            defaultPerson.sections.map(section=> templateSection(
                section.sectionName, 
                section.sectionItems.map(sectionItem => templateSectionItem(sectionItem)), 
                section.linkItems.map(linkItem => templateLinkItem(linkItem.href, linkItem.linkContent))
            ))
        )
    }

  return (
    <div className='tool' onClick={onClick} >
        <RefreshIcon colour='black'/>
    </div>
  )
}

export default SetDefaults