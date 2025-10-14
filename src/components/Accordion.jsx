import { DropDownArrow, DeleteIcon } from '../icons';
import { useEffect } from 'react';

const Accordion = ({ children, title, onShow=null, isActive=null, id=null, type=null, number=null, deleteAction=null}) => {

  



  
  if(type==='inner'){
    return(
      <div className="inner-accordion" data-number={number}>
          <div className="inner-accordion-upper" onClick={ () => onShow(id)}>
            <h2>
                {title}
            </h2>
            <div className="icons">
              <DropDownArrow className={isActive ? "flip-dropdown-down" : "flip-dropdown-up"}/>
              <DeleteIcon className='delete-btn' action={deleteAction}/>
            </div>
          </div>
          <div className={isActive ? 'children-show' : ""}>{isActive ? children : null}</div>
      </div>
    )

  }else{
    return (
      <div className="accordion">
          <div className={isActive ? "accordion-upper accordion-upper-visited" : "accordion-upper" } onClick={ () => onShow(id)}>
            <h2>
                {title}
            </h2>
            <DropDownArrow className={isActive ? "flip-dropdown-down" : "flip-dropdown-up"}/>
          </div>
          <div className={isActive ? 'children-show' : ""}>{isActive ? children : null}</div>
      </div>
    )
  }

}

export default Accordion
