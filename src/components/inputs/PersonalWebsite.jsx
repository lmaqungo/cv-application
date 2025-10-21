import InputField from '../InputField'

const PersonalWebsite = ({ setter, value }) => {
    
    function handleInput(e){
        setter(e.target.value)
    }
    return (
        <div>
            <InputField label="Personal Website" readContent={handleInput} value={value}/>
        </div>
    )
}

export default PersonalWebsite