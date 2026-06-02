

const JobTitle = ({ onChange, value }) => {

  return (
        <div className='base-input'>
            <label >Job title</label>
            <input className='text-label' name='jobTitle'  type='text' onChange={onChange} value={value}/>
        </div>
    )
}

export default JobTitle