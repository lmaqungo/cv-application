

const PersonalWebsite = ({ onChange, value }) => {
    
    return (
        <div className='base-input'>
            <label >Personal Website</label>
            <input className='text-label' name='website'  type='text' onChange={onChange} value={value}/>
        </div>
    )
}

export default PersonalWebsite