

const ProfileSummary = ({ onChange, value }) => {
  
    const label = "Highlight your professional experience, skills, and accomplishments in a brief, impactful statement."

    return (
        <div className='base-input'>
            <label >{label}</label>
            <textarea class='text-label' name="profileSummary" onChange={onChange} rows="7" style={{resize: 'none'}} value={value}></textarea>
        </div>
    )
}

export default ProfileSummary