import React from 'react'
import SectionName from './SectionName'
import AddItemButton from '../AddItemButton';
import SectionItemMenu from '../SectionItemMenu';
import LinkItemMenu from '../LinkItemMenu';
import { v4 as uuid } from 'uuid' ;
import { useState, useEffect, useRef } from 'react';

const Section = ({ setSectionContent, sectionId }) => {

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

    const [sectionItems, setSectionItems] = useState({id: sectionId, contents: [templateSectionItem()]});
    const [linkItems, setLinkItems] = useState({id: sectionId, contents: []});
    
    const sectionItemsRef = useRef(sectionItems);
    const linkItemsRef = useRef(linkItems);

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

    function deleteSectionItem(e){
    const prevArr = [...sectionItemsRef.current.contents]; 
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
        <SectionItemMenu sectionItemsObj={sectionItems} setSectionItems={setSectionItems} setSectionContent= {setSectionContent}/>
        <LinkItemMenu linkItemsObj={linkItems} setLinkItems={setLinkItems} setSectionContent= {setSectionContent}/>
        <div className="section-buttons">
            <AddItemButton title="Add link" addAction={addLinkItem}/>
            <AddItemButton title="Add section item" addAction={addSectionItem}/>
        </div>
    </div>
  )
}

export default Section 