
import { DeleteIcon } from "../../icons";

const SectionItem = ({ setSections, section, sectionItem }) => {

    function handleTyping(e) {
    
        setSections(prevSectionArray=> 
            prevSectionArray.map(sectionObj => {
                if(sectionObj.id === section.id){
                    const updatedSectionItems = sectionObj.sectionItems.map(sectionItemObj => {
                    if(sectionItemObj.id === sectionItem.id) {
                        return {
                            ...sectionItemObj, [e.target.name]: e.target.value
                        }
                    } else {
                        return sectionItemObj
                    }
                })
                return {...sectionObj, sectionItems: updatedSectionItems }
                } else {
                    return sectionObj
                }
            })
        )
    }

    function deleteSectionItem(sectionItemId){
    
      setSections(prevArray => 
            prevArray.map(sectionObj => {
              if(sectionObj.id === section.id){
                  const updatedSectionItems = sectionObj.sectionItems.filter(
                    sectionItem => sectionItem.id !== sectionItemId
                  )
                  return {...sectionObj, sectionItems: updatedSectionItems}
              } else {
                  return sectionObj
              }
            })
        )
  }

  return (
    <div className='input-list-item'>
        <div className='no-label-input'>
            <input className='text-label' name="content"  type='text' onChange={handleTyping} value={sectionItem.content} />
        </div>
        <DeleteIcon className='delete-btn' action={() => deleteSectionItem(sectionItem.id)}/>
    </div>
  )

}

const SectionItemMenu = ({ section, setSections }) => {
  return (
    <div className='container'>
        {
            section.sectionItems.map(sectionItem=>
                <SectionItem key={sectionItem.id} setSections={setSections} section={section} sectionItem={sectionItem} />
            )
        }
    </div>
  )
}

export default SectionItemMenu