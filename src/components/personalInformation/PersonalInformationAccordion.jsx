import { useContext } from "react";
import InputField from '../inputs/InputField'
import { InputValuesContext } from "../../context/InputValuesContext";
import Accordion from "../Accordion";

const PersonalInformationAccordion = ({ activeAccordion, handleClick }) => {
    
    const { person, setPerson } = useContext(InputValuesContext)

    function handleTyping(e){
        setPerson(
        {
            ...person, 
            [e.target.name]: e.target.value
        }
        )
    }   

    return (
    <Accordion title = 'Personal Information' isActive = {activeAccordion === 1} onShow={ () => handleClick(1) } >
        <div className="input-menu" >
          <div className="input-menu-layer-shared" >
            <InputField 
                label='First Name'
                handleTyping={handleTyping}
                value={person.firstName}
                name='firstName'
            />
            <InputField 
                label='Last Name'
                handleTyping={handleTyping}
                value={person.lastName}
                name='lastName'
            />
            </div>
            <InputField 
                label='Job Title'
                handleTyping={handleTyping}
                value={person.jobTitle}
                name='jobTitle'
            />
            <div className="input-menu-layer-shared" >
                <InputField 
                    label='Phone'
                    handleTyping={handleTyping}
                    value={person.phone}
                    name='phone'
                />
                <InputField 
                    label='Email'
                    handleTyping={handleTyping}
                    value={person.email}
                    name='email'
                />
            </div>
            <div className="input-menu-layer-shared" >
                <InputField 
                    label='Github'
                    handleTyping={handleTyping}
                    value={person.github}
                    name='github'
                />
                <InputField 
                    label='Personal Website'
                    handleTyping={handleTyping}
                    value={person.website}
                    name='website'
                />
            </div>
            <InputField 
                    label='Location'
                    handleTyping={handleTyping}
                    value={person.location}
                    name='location'
            />
        </div>
    </Accordion>
  )
}

export default PersonalInformationAccordion