import InputField from './InputField'
import { DeleteIcon } from '../icons'

const SkillInput = ({ setSkillContent, deleteAction, id }) => {

    function logObj(e){
        const currentSkillId = e.target.closest('[data-id]').dataset.id;
        console.log(`which input is active? ${currentSkillId}`);
        setSkillContent(prevArray=>
        
            prevArray.map(skill=>
                skill.id ===currentSkillId 
                ? {
                    ...skill, content: e.target.value
                }
                : skill
            ) 
        
            
        )
    }


  return (
    <div className='skill' data-id={id}>
        <InputField readContent={logObj} />
        <DeleteIcon className='delete-btn' action={deleteAction}/>
    </div>
  )
}

export default SkillInput