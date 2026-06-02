import InputField from './InputField'
import { DeleteIcon } from '../icons'

const SectionItem = ({ setSectionItems, deleteAction, id, setSectionContent }) => {


    function handleChange(e) {
    const currentSectionItemId = e.target.closest('[data-id]').dataset.id;
    const newContentValue = e.target.value; // Extract value once
    
    
    setSectionItems(prevObj => {
        const updatedContents = prevObj.contents.map(sectionItem =>
        sectionItem.id === currentSectionItemId 
            ? { ...sectionItem, content: newContentValue }
            : sectionItem
        );
        
        setSectionContent(prevArray =>
        prevArray.map(section =>
            section.id === prevObj.id
            ? { ...section, sectionItems: updatedContents } 
            : section
        )
        );
        
        return { ...prevObj, contents: updatedContents };
    });
    }

  return (
    <div className='input-list-item' data-id={id}>
        <InputField readContent={handleChange} />
        <DeleteIcon className='delete-btn' action={deleteAction}/>
    </div>
  )

}

export default SectionItem