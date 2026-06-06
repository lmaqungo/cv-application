import Accordion from "../Accordion";
import { useContext } from "react";
import { InputValuesContext } from "../../context/InputValuesContext";
import TextArea from "../inputs/TextArea";


const ProfileSummaryAccordion = ({ activeAccordion, handleClick }) => {

  const { person, setPerson } = useContext(InputValuesContext)

  function handleTyping(e){
      setPerson(
      {
          ...person, 
          [e.target.name]: e.target.value
      }
      )
  }   

  const label = "Highlight your professional experience, skills, and accomplishments in a brief, impactful statement."

  return (
    <Accordion title='Profile Summary' isActive = {activeAccordion === 4} onShow={ () => handleClick(4) } >
      <div className="input-menu">
          <TextArea 
            label={label}
            handleTyping={handleTyping}
            rows={7}
            name="profileSummary"
            value={person.profileSummary}
          />
      </div>
    </Accordion>
  )
}

export default ProfileSummaryAccordion