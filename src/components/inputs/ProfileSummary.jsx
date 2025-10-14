import TextArea from "../TextArea"

const ProfileSummary = ({ setter }) => {
  function handleInput(e){
        setter(e.target.value)
    }

    const label = "Highlight your professional experience, skills, and accomplishments in a brief, impactful statement."

    return (
        <div>
            <TextArea label={label} readContent={handleInput} rows= "7"/>
        </div>
    )
}

export default ProfileSummary