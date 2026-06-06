
const TextArea = ({ label, handleTyping, rows, value, name }) => {
  return (
    <div className='base-input'>
        <label for={name}>{label}</label>
        <textarea class='text-label' id={name} name={name} onChange={handleTyping} rows={rows} style={{resize: 'none'}} value={value}></textarea>
    </div>
  )
}

export default TextArea