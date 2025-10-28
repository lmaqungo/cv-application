import LinkItem from './LinkItem'

const LinkItemMenu = ({ linkItemsObj, setLinkItems, setSectionContent }) => {
  return (
    <div className='container'>
        {
            linkItemsObj.contents.map( linkItem=>{
                return(
                    <LinkItem id={linkItem.id} deleteAction={linkItem.deleteAction} key={linkItem.id} setLinkItems={setLinkItems} 
                     setSectionContent={setSectionContent}/>
                )
            }
            )
        }
    </div>
  )
}

export default LinkItemMenu