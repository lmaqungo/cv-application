import SectionItem from './SectionItem'

const SectionItemMenu = ({ sectionItemsObj, setSectionItems, setSectionContent }) => {
  return (
    <div className='container'>
        {
            sectionItemsObj.contents.map( sectionItem=>{
                return(
                    <SectionItem id={sectionItem.id} deleteAction={sectionItem.deleteAction} key={sectionItem.id} setSectionItems={setSectionItems} 
                     setSectionContent={setSectionContent}/>
                )
            }
            )
        }
    </div>
  )
}

export default SectionItemMenu