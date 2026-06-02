

const FirstName = ({ onChange, value }) => {

    return (
        <div className='base-input'>
            <label >First Name</label>
            <input className='text-label' name='firstName'  type='text' onChange={onChange} value={value}/>
        </div>
    )
}

export default FirstName