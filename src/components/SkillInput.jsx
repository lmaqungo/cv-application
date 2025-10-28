import InputField from './InputField'
import { DeleteIcon } from '../icons'

const SkillInput = ({ setSkillContent, deleteAction, id }) => {

    function handleChange(e){
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
    <div className='input-list-item' data-id={id}>
        <InputField readContent={handleChange} />
        <DeleteIcon className='delete-btn' action={deleteAction}/>
    </div>
  )
}

export default SkillInput