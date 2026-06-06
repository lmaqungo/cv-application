
import { DeleteIcon } from '../../icons'

const LinkItem = ({ section, setSections, linkItem }) => {

    function handleTyping(e) {
    
        setSections(prevSectionArray=> 
             prevSectionArray.map(sectionObj => {
                if(sectionObj.id === section.id){
                    
                const updatedSectionItems = sectionObj.linkItems.map(linkItemObj => {
                        if(linkItemObj.id === linkItem.id) {
                            return {
                                ...linkItemObj, [e.target.name]: e.target.value
                            }
                        } else {
                            return linkItemObj
                        }
                })
                return {...sectionObj, linkItems: updatedSectionItems }
                } else {
                    return sectionObj
                }
            })
        )
    }

    function deleteLinkItem(linkItemId){

        setSections(prevArray => 
            prevArray.map(sectionObj => {
                if(sectionObj.id === section.id){
                    const updatedLinkItems = sectionObj.linkItems.filter(linkItem => linkItem.id !== linkItemId)
                    return {...sectionObj, linkItems: updatedLinkItems}
                } else {
                    return sectionObj
                }
            })
        )
  }

  return (
    <div className='input-list-item'>
        <div className="link-item">    
            <div className='no-label-input'>
                <input className='text-label' name='linkContent' type='text' onChange={handleTyping} value={linkItem.linkContent} placeholder='Link Text'/>
            </div>
            <div className='no-label-input'>
                <input className='text-label' name='href' type='text' onChange={handleTyping} value={linkItem.href} placeholder='Link URL'/>
            </div>
        </div>
        <DeleteIcon className='delete-btn' action={() => deleteLinkItem(linkItem.id)}/>
    </div>
  )
}

const LinkItemMenu = ({ section, setSections }) => {
  return (
    <div className='container'>
        {
            section.linkItems.map(linkItem=>
                <LinkItem key={linkItem.id} linkItem={linkItem} key={linkItem.id} section={section} setSections={setSections}/>
            )
        }
    </div>
  )
}

export default LinkItemMenu