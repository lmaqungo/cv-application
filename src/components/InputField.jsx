

const InputField = ({ type="text", label, readContent, value=undefined }) => {
  return (
    <div className='base-input'>
        <label for={label.toLowerCase()}>{label}</label>
        <input className={`${type}-label`}  type={type} id={label.toLowerCase()} onChange={readContent} value={value}/>
    </div>
  )
}

export default InputField