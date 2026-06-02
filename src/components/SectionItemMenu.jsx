import SectionItem from './SectionItem'

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