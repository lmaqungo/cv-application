

const InputField = ({ type="text", label, readContent, value }) => {
  if(label){
    return (
    <div className='base-input'>
        <label for={label.toLowerCase()}>{label}</label>
        <input className={`${type}-label`}  type={type} id={label.toLowerCase()} onChange={readContent} value={value}/>
    </div>
  )
  }else{
    return (
    <div className='no-label-input'>
        <input className={`${type}-label`}  type={type} onChange={readContent} value={value}/>
    </div>
  )
  }
}

export default InputField