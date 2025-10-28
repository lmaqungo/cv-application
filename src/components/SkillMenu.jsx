import React from 'react'
import SkillInput from './SkillInput'

const SkillMenu = ({ skillArray, setSkillContent }) => {

  return (
    <div className='container'>
        {
            skillArray.map( skill=>{
                return(
                    <SkillInput id={skill.id} deleteAction={skill.deleteAction} key={skill.id} setSkillContent={setSkillContent} />
                )
            }
            )
        }
    </div>
  )
}

export default SkillMenu