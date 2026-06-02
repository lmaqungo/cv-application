

const Github = ({ onChange, value }) => {

  return (
        <div className='base-input'>
            <label >Github</label>
            <input className='text-label' name='github'  type='text' onChange={onChange} value={value}/>
        </div>
    )
}

export default Github