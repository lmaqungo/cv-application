

const LastName = ({ onChange, value }) => {

  return (
        <div className='base-input'>
            <label >Last Name</label>
            <input className='text-label' name='lastName'  type='text' onChange={onChange} value={value}/>
        </div>
    )
}

export default LastName



