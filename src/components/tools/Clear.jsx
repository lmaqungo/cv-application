import { ClearIcon } from '../../icons'
import { useContext } from 'react'
import { InputValuesContext } from '../../context/InputValuesContext'


const Clear = () => {

    const { setPerson, setJobs, setEducation, setSkills, setSections } = useContext(InputValuesContext)

    function onClick(){
        setPerson({
        firstName:'',
        lastName:'', 
        jobTitle:'', 
        phone:'', 
        email:'', 
        github:'',
        website:'', 
        location:'', 
        profileSummary: ''
        })
        setJobs([])
        setEducation([])
        setSkills([])
        setSections([])
    }   

  return (
    <div className='tool' onClick={onClick} >
        <ClearIcon colour='black'/>
    </div>
  )
}

export default Clear