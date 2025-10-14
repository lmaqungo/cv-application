import InputField from "../InputField"

const Email = ( { setter }) => {
    
    function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Email" readContent={handleInput}/>
        </div>
    )
}

export default Email