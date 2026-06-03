import SectionName from './SectionName'
import AddItemButton from '../AddItemButton';
import SectionItemMenu from './SectionItemMenu';
import LinkItemMenu from './LinkItemMenu';

const Section = ({ section, setSectionContent }) => {
    
    function handleNameChange(e){
        
        setSectionContent(prevArray=>
        
            prevArray.map(sectionObj=>
                sectionObj.id ===section.id 
                ? {
                    ...sectionObj, sectionName: e.target.value
                }
                : sectionObj
            ) 

        )
    }

  return (
    <div class='input-menu'>
        <SectionName onChange={handleNameChange} value={section.sectionName} />
        <SectionItemMenu section={section} setSectionContent= {setSectionContent}/>
        <LinkItemMenu section={section} setSectionContent= {setSectionContent}/>
        <div className="section-buttons">
            <AddItemButton title="Add link" addAction={() => section.addLinkItem(section)}/>
            <AddItemButton title="Add section item" addAction={() => section.addSectionItem(section)}/>
        </div>
    </div>
  )
}

export default Section  