import SectionName from './SectionName'
import AddItemButton from '../AddItemButton';
import SectionItemMenu from '../SectionItemMenu';
import LinkItemMenu from '../LinkItemMenu';
import { v4 as uuid } from 'uuid' ;
import { useState, useEffect, useRef } from 'react';

const Section = ({ sectionArray, section, setSectionContent, sectionId }) => {
    
    const templateSectionItem = (content='') => {
        return{
            id: uuid(), 
            deleteAction: deleteItem, 
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

    const [sectionItems, setSectionItems] = useState({id: sectionId, contents: [templateSectionItem()]});
    const [linkItems, setLinkItems] = useState({id: sectionId, contents: []})
    
    const sectionItemsRef = useRef(sectionItems);
    const linkItemsRef = useRef(linkItems);

    const sectionsRef = useRef(sectionArray);

    useEffect(() => {
        section.sectionItems.forEach(item => {
            console.log(`section item id: ${item.id}`)
        })
    }, [section])

    useEffect(() => {
        sectionsRef.current = sectionArray
    }, [sectionArray])

    useEffect(() => {
    sectionItemsRef.current = sectionItems; 
    }
    , 
    [sectionItems]); 

    useEffect(() => {
    linkItemsRef.current = linkItems; 
    }
    , 
    [linkItems]); 

    function addSectionItem(){
    setSectionItems(prevObj=>{
      const newArr = [...prevObj.contents, templateSectionItem()
      ]; 
      return {...prevObj, contents: newArr};
    }

    )
  }

    function addLinkItem(){
    setLinkItems(prevObj=>{
      const newArr = [...prevObj.contents, templateLinkItem()
      ]; 
      return {...prevObj, contents: newArr};
    }

    )
  }

  function addItem(){
    /* 
        Grab the old section object
        add a new template section item to the array field
        update the section array with this new section object instance
        set the new state with the state setter fn
    */

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

  function deleteItem(sectionItemId){
    
      setSectionContent(prevArray => {
          return prevArray.map(sectionObj => {
              if(sectionObj.id === section.id){
                  const prevSectionItemsArr = [...sectionObj.sectionItems]
                  const itemToDelete = prevSectionItemsArr.findIndex(
                      element => element.id === sectionItemId
                  ); 
                  console.log(`index of section item to delete: ${itemToDelete}`)
                  prevSectionItemsArr.splice(itemToDelete, 1);
                  return {...sectionObj, sectionItems: prevSectionItemsArr}
              } else {
                  return sectionObj
              }
          })
      })

    /*find the list item to remove 
      remove from the section object array
      update the section array with this nrw section object using state

      But this will require a new method for adding, as well as for rendering the section items
    */

  }

    function deleteSectionItem(e){
    const prevArr = [...sectionsRef.current.contents]; 
    const itemToDelete= prevArr.findIndex(element=> element.id === e.target.closest('[data-id]').dataset.id); 
    prevArr.splice(itemToDelete, 1); 
    
    setSectionItems(prevObj=> ({
        ...prevObj, 
        contents: prevArr
    })
    );
    }

    function deleteLinkItem(e){
    const prevArr = [...linkItemsRef.current.contents]; 
    const itemToDelete= prevArr.findIndex(element=> element.id === e.target.closest('[data-id]').dataset.id); 
    prevArr.splice(itemToDelete, 1); 
    setLinkItems(prevObj=> ({
        ...prevObj, 
        contents: prevArr
    })
    );
    }
 
    function handleNameChange(e){
        const currentSectionId = e.target.closest('[data-number]').dataset.number;
        setSectionContent(prevArray=>
        
            prevArray.map(section=>
                section.id ===currentSectionId 
                ? {
                    ...section, sectionName: e.target.value
                }
                : section
            ) 

        )
    }

  return (
    <div class='input-menu'>
        <SectionName setter={handleNameChange}/>
        <SectionItemMenu section={section} setSectionContent= {setSectionContent}/>
        <LinkItemMenu linkItemsObj={linkItems} setLinkItems={setLinkItems} setSectionContent= {setSectionContent}/>
        <div className="section-buttons">
            <AddItemButton title="Add link" addAction={addLinkItem}/>
            <AddItemButton title="Add section item" addAction={addItem}/>
        </div>
    </div>
  )
}

export default Section  