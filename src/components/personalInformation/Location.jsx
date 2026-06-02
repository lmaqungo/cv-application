

const Location = ({ onChange, value }) => {

    return (
        <div className='base-input'>
            <label >Location</label>
            <input className='text-label' name='location'  type='text' onChange={onChange} value={value}/>
        </div>
    )
}

export default Location