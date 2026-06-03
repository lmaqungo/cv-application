

const SectionName = ({ onChange, value }) => {
  return (
      <div className='base-input'>
        <label for='sectionName' >Section Name</label>
        <input className='text-label'  type='text' id='sectionName' onChange={onChange} value={value} placeholder='Section Name'/>
    </div>
  )
}

export default SectionName