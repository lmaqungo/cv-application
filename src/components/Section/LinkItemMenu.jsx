
import { DeleteIcon } from '../../icons'

const LinkItem = ({ linkItem, linkItemId, deleteAction, section, setSectionContent }) => {

    function handleChange(e) {
        const newContentValue = e.target.value; 
    
        setSectionContent((prevSectionArray)=> {
            return prevSectionArray.map(sectionObj => {
                if(sectionObj.id === section.id){
                    
                const updatedSectionItems = sectionObj.linkItems.map(linkItem => {
                        if(linkItem.id === linkItemId) {
                            return {
                                ...linkItem, [e.target.name]: newContentValue
                            }
                        } else {
                            return linkItem
                        }
                })
                return {...sectionObj, linkItems: updatedSectionItems }
                } else {
                    return sectionObj
                }
            })
        })
    }

  return (
    <div className='input-list-item'>
        <div className="link-item">    
            <div className='no-label-input'>
                <input className='text-label' name='linkContent' type='text' onChange={handleChange} value={linkItem.linkContent} placeholder='Link Text'/>
            </div>
            <div className='no-label-input'>
                <input className='text-label' name='href' type='text' onChange={handleChange} value={linkItem.href} placeholder='Link URL'/>
            </div>
        </div>
        <DeleteIcon className='delete-btn' action={() => deleteAction(linkItemId)}/>
    </div>
  )
}

const LinkItemMenu = ({ section, setSectionContent }) => {
  return (
    <div className='container'>
        {
            section.linkItems.map( linkItem=>{
                return(
                    <LinkItem linkItem={linkItem} linkItemId={linkItem.id} deleteAction={linkItem.deleteAction} key={linkItem.id} section={section} setSectionContent={setSectionContent}/>
                )
            }
            )
        }
    </div>
  )
}

export default LinkItemMenu