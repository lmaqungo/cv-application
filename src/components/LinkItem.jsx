import LinkText from './inputs/LinkText';
import LinkURL from './inputs/LinkURL';
import { DeleteIcon } from '../icons';

const LinkItem = ({ id, deleteAction, setLinkItems, setSectionContent }) => {

    function handleChange(e) {
    const currentLinkItemId = e.target.closest('[data-id]').dataset.id;
    const newContentValue = e.target.value; // Extract value once
    const currentCategory = e.target.closest('[data-category]').dataset.category;
    
    // SINGLE FUNCTIONAL UPDATE - Updates BOTH states AT ONCE
    setLinkItems(prevObj => {
        const updatedContents = prevObj.contents.map(linkItem =>
        linkItem.id === currentLinkItemId 
            ? { ...linkItem, [currentCategory]: newContentValue }
            : linkItem
        );
        
        // IMMEDIATELY update parent with NEW contents
        setSectionContent(prevArray =>
        prevArray.map(section =>
            section.id === prevObj.id
            ? { ...section, linkItems: updatedContents }  // ✅ FRESH array!
            : section
        )
        );
        
        return { ...prevObj, contents: updatedContents };
    });
    }


  return (
  <div className='input-list-item' data-id={id}>
        <div className="link-item">    
            <LinkText handleInput={handleChange}/>
            <LinkURL handleInput={handleChange}/>
        </div>
        <DeleteIcon className='delete-btn' action={deleteAction}/>
    </div>
  )
}

export default LinkItem