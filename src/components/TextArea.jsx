
const TextArea = ({ label, readContent, rows }) => {
  return (
    <div className='base-input'>
        <label for={label.toLowerCase()}>{label}</label>
        <textarea class='text-label' id={label.toLowerCase()} onChange={readContent} rows={rows} style={{resize: 'none'}}></textarea>
    </div>
  )
}

export default TextArea