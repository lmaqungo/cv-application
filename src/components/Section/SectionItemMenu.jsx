
import { DeleteIcon } from "../../icons";

const SectionItem = ({ value, sectionItemId, deleteAction, setSectionContent, section }) => {

    function handleChange(e) {
        const newContentValue = e.target.value; 
    
        setSectionContent((prevSectionArray)=> {
            return prevSectionArray.map(sectionObj => {
                if(sectionObj.id === section.id){
                    /* return the object with the a new value for the content property for the section list item object
                    whose id corresponds with the sectionItemId
                    */
                const updatedSectionItems = sectionObj.sectionItems.map(sectionItem => {
                        if(sectionItem.id === sectionItemId) {
                            return {
                                ...sectionItem, content: newContentValue
                            }
                        } else {
                            return sectionItem
                        }
                })
                return {...sectionObj, sectionItems: updatedSectionItems }
                } else {
                    return sectionObj
                }
            })
        })
    }

  return (
    <div className='input-list-item'>
        <div className='no-label-input'>
            <input className={`text-label`}  type='text' onChange={handleChange} value={value} />
        </div>
        <DeleteIcon className='delete-btn' action={() => deleteAction(sectionItemId)}/>
    </div>
  )

}

const SectionItemMenu = ({ section, setSectionContent }) => {
  return (
    <div className='container'>
        {
            section.sectionItems.map( sectionItem=>{
                return(
                    <SectionItem value={sectionItem.content} sectionItemId ={sectionItem.id} deleteAction={sectionItem.deleteAction} key={sectionItem.id} setSectionContent={setSectionContent} section={section}/>
                )
            }
            )
        }
    </div>
  )
}

export default SectionItemMenu