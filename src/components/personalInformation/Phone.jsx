

const Phone = ({ onChange, value }) => {
    
    return (
        <div className='base-input'>
            <label >Phone</label>
            <input className='text-label' name='phone'  type='text' onChange={onChange} value={value}/>
        </div>
    )
}

export default Phone