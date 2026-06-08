import { DropDownArrow, DeleteIcon } from '../icons';

const Accordion = ({ children, title, onShow=null, isActive=null, type=null, deleteAction }) => {



  
  if(type==='inner'){
    return(
      <div className="inner-accordion" >
          <div className="inner-accordion-upper" onClick={onShow}>
            <h2>
                {title}
            </h2>
            <div className="icons">
              <DropDownArrow className={isActive ? "flip-dropdown-down" : "flip-dropdown-up"}/>
              <DeleteIcon onClick={deleteAction}/>
            </div>
          </div>
          <div className={isActive ? 'children-show' : "children-hide"}>{children}</div>
      </div>
    )

  }else{
    return (
      <div className="accordion">
          <div className={isActive ? "accordion-upper accordion-upper-visited" : "accordion-upper" } onClick={onShow}>
            <h2>
                {title}
            </h2>
            <DropDownArrow className={isActive ? "flip-dropdown-down" : "flip-dropdown-up"}/>
          </div>
          <div className={isActive ? 'children-show' : "children-hide"}>{children}</div>
      </div>
    )
  }

}

export default Accordion
