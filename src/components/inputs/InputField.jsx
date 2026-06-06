

const InputField = ({ label, handleTyping, value,  name }) => {
    return (
    <div className='base-input'>
        <label for={name}>{label}</label>
        <input className='text-label' name={name} type='text' id={name} onChange={handleTyping} value={value} />
    </div>
  )
}

export default InputField