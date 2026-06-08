import Accordion from '../Accordion'
import { useContext, useState } from 'react'
import { InputValuesContext } from '../../context/InputValuesContext'
import AddItemButton from '../AddItemButton'
import Section from './Section'
import { templateSection } from '../../templates'


const MoreAccordion = ({ activeAccordion, handleClick }) => {

    const { sections, setSections } = useContext(InputValuesContext)

    const [activeInnerAccordion, setActiveInnerAccordion] = useState(null)

    function addSection(){
        setSections(prevSections => [...prevSections, templateSection()])
    }

    function deleteSection(sectionId){
        setSections(prevSections => prevSections.filter(section => section.id !== sectionId))
    }

    function handleInnerClick(id) {
        setActiveInnerAccordion(activeInnerAccordion === id ? null : id); 
    }

    function renderSections(){
        return sections.map( section =>
            <Accordion title={!section.sectionName ? 'Section' : section.sectionName} isActive = {activeInnerAccordion === section.id} onShow = { () => handleInnerClick(section.id) } type='inner' deleteAction={() => deleteSection(section.id)} key={section.id} >
                <Section key={section.id} section={section} setSections={setSections} />
            </Accordion>
        )
    }

    return (
        <Accordion title='More' isActive = {activeAccordion === 7} onShow={ () => handleClick(7) } >
            <div className="input-menu">
                <div className="container">
                    {renderSections()}
                </div>
                <AddItemButton title='Add Section' addAction={addSection}/>
            </div>
        </Accordion>
    )
}

export default MoreAccordion