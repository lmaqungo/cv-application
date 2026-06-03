import SectionName from './SectionName'
import AddItemButton from '../AddItemButton';
import SectionItemMenu from './SectionItemMenu';
import LinkItemMenu from './LinkItemMenu';
import { v4 as uuid } from 'uuid' ;

const Section = ({ section, setSectionContent }) => {
    
    const templateSectionItem = (content='') => {
        return{
            id: uuid(), 
            deleteAction: deleteSectionItem, 
            content: content
        }
    };

    const templateLinkItem = (href='', linkContent='') => {
        return{
            id: uuid(), 
            deleteAction: deleteLinkItem, 
            href: href, 
            linkContent: linkContent
        }
    };

    
  function addSectionItem(){

    setSectionContent((prevSectionArray)=> {
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
     setSectionContent((prevSectionArray)=> {
        return prevSectionArray.map(sectionObj => {
            if(sectionObj.id === section.id) {

                return {...sectionObj, linkItems: [...sectionObj.linkItems, templateLinkItem()] }
            } else {
                return sectionObj
            }
        })
    })
  }

  function deleteSectionItem(sectionItemId){
    
      setSectionContent(prevArray => {
          return prevArray.map(sectionObj => {
              if(sectionObj.id === section.id){
                  const prevSectionItemsArr = [...sectionObj.sectionItems]
                  const itemToDelete = prevSectionItemsArr.findIndex(
                      element => element.id === sectionItemId
                  ); 
                  prevSectionItemsArr.splice(itemToDelete, 1);
                  return {...sectionObj, sectionItems: prevSectionItemsArr}
              } else {
                  return sectionObj
              }
          })
      })

  }

  function deleteLinkItem(linkItemId){
    setSectionContent(prevArray => {
          return prevArray.map(sectionObj => {
              if(sectionObj.id === section.id){
                  const prevLinkItemsArr = [...sectionObj.linkItems]
                  const itemToDelete = prevLinkItemsArr.findIndex(
                      element => element.id === linkItemId
                  ); 
                  prevLinkItemsArr.splice(itemToDelete, 1);
                  return {...sectionObj, linkItems: prevLinkItemsArr}
              } else {
                  return sectionObj
              }
          })
      })
  }

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
            <AddItemButton title="Add link" addAction={addLinkItem}/>
            <AddItemButton title="Add section item" addAction={addSectionItem}/>
        </div>
    </div>
  )
}

export default Section  