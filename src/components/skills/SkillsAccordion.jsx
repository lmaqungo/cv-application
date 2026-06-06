import Accordion from '../Accordion'
import AddItemButton from '../AddItemButton'
import { useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { InputValuesContext } from '../../context/InputValuesContext'
import { DeleteIcon } from '../../icons'
import SkillInput from './SkillInput'

const SkillsAccordion = ({ activeAccordion, handleClick }) => {

    const { skills, setSkills } = useContext(InputValuesContext)

    const templateSkill = (content='') => {
        return{
        id: uuid(),  
        content: content
        }
    };

    function addSkill(){
        setSkills(prevSkills => [...prevSkills, templateSkill()])
    };
    
    function deleteSkill(skillId){
        setSkills(prev => prev.filter(skill => skill.id !== skillId))
    };

    function skillMenu(){
        return (
            <div className='container' >
                {
                    skills.map( skill => 
                       <SkillInput key={skill.id} setSkills={setSkills} deleteSkill={deleteSkill} skill={skill} /> 
                    )
                }
            </div>
        )
    };

    return (
        <Accordion title="Skills" isActive={activeAccordion === 5} onShow={() => handleClick(5)} >
            <div className='input-menu' >
                {skillMenu()}
                <AddItemButton title="Add Skill"  addAction={addSkill}/>
            </div>
        </Accordion>
    )
}

export default SkillsAccordion