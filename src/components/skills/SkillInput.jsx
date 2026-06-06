import { DeleteIcon } from '../../icons'

const SkillInput = ({ setSkills, deleteSkill, skill }) => {

    function handleTyping(e){
        setSkills(prevSkills => 
            prevSkills.map(skillObj => {
                if(skillObj.id === skill.id){
                    return {
                        ...skillObj, 
                        [e.target.name]: [e.target.value]
                    }
                }else{
                    return skillObj
                }
            })
        )
    }
    
  return (
   <div className='input-list-item' >
        <div className='no-label-input'>
            <input value={skill.content} name='content' className='text-label' type='text' onChange={handleTyping} />
        </div>
        <DeleteIcon className='delete-btn' action={() => deleteSkill(skill.id)} />  
    </div>
  )
}

export default SkillInput