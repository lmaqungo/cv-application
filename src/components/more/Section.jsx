import SectionName from './SectionName'
import AddItemButton from '../AddItemButton';
import SectionItemMenu from './SectionItemMenu';
import LinkItemMenu from './LinkItemMenu';
import { templateSectionItem, templateLinkItem } from '../../templates';


const Section = ({ section, setSections }) => {
    
    function handleNameChange(e){
        setSections(prevArray=>
            prevArray.map(sectionObj=>
                sectionObj.id ===section.id 
                ? {
                    ...sectionObj, sectionName: e.target.value
                }
                : sectionObj
            )
        )
    }

    function addSectionItem(){
        setSections((prevSectionArray)=> {
            return prevSectionArray.map(sectionObj => {
                if(sectionObj.id === section.id) {

                    return {...sectionObj, sectionItems: [...sectionObj.sectionItems, templateSectionItem()] }
                } else {
                    return sectionObj
                }
        })
    })

  }

  function addLinkItem(){
     setSections((prevSectionArray)=> {
        return prevSectionArray.map(sectionObj => {
            if(sectionObj.id === section.id) {

                return {...sectionObj, linkItems: [...sectionObj.linkItems, templateLinkItem()] }
            } else {
                return sectionObj
            }
        })
    })
  }

  return (
    <div class='input-menu'>
        <SectionName onChange={handleNameChange} value={section.sectionName} />
        <SectionItemMenu section={section} setSections= {setSections}/>
        <LinkItemMenu section={section} setSections= {setSections}/>
        <div className="section-buttons">
            <AddItemButton title="Add link" addAction={addLinkItem}/>
            <AddItemButton title="Add section item" addAction={addSectionItem}/>
        </div>
    </div>
  )
}

export default Section  