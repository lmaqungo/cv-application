
const Email = ({ onChange, value }) => {
    
    return (
        <div className='base-input'>
            <label >Email</label>
            <input className='text-label' name='email'  type='text' onChange={onChange} value={value}/>
        </div>
    )
}

export default Email