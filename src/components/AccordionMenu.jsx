import { useState } from 'react'
import Accordion from './Accordion'
import React from 'react';

const AccordionMenu = ({ children, show }) => {

  const [activeAccordion, setActiveAccordion] = useState(null);

  function handleClick(id) {
    setActiveAccordion(activeAccordion === id ? null : id); 
  }

  return ( 
    <div className={`accordion-container ${!show && 'hide' } `}>
        {React.Children.map(children, (accordion, index) => {
          if(accordion.type === Accordion){
              return (
            <Accordion id={index} title={accordion.props.title} isActive = {activeAccordion === index} onShow = {handleClick} type={accordion.props.type} number={accordion.props.number} deleteAction={accordion.props.deleteAction} accordionIdSetter={null}>
              {accordion.props.children}
            </Accordion>
              )
            }else{
            console.log(`Invalid child type. Expecting: Accordion. \nProvided child type is: ${accordion.type}`);
          }
        }
        )}
    </div>
  )
}

export default AccordionMenu