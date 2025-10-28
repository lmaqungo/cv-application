

const InputField = ({ type="text", label, readContent, value, placeholder, category }) => {
  if(label){
    return (
    <div className='base-input'>
        <label for={label.toLowerCase()}>{label}</label>
        <input className={`${type}-label`}  type={type} id={label.toLowerCase()} onChange={readContent} value={value} placeholder={placeholder? placeholder : ''} data-category={category}/>
    </div>
  )
  }else{
    return (
    <div className='no-label-input'>
        <input className={`${type}-label`}  type={type} onChange={readContent} value={value} placeholder={placeholder? placeholder : ''} data-category={category}/>
    </div>
  )
  }
}

export default InputField