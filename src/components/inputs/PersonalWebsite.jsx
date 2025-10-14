import InputField from '../InputField'

const PersonalWebsite = ( { setter }) => {
    
    function handleInput(e){
        setter(e.target.value)
    }
    return (
        <div>
            <InputField label="Personal Website" readContent={handleInput}/>
        </div>
    )
}

export default PersonalWebsite