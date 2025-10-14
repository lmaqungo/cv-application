import InputField from "../InputField"

const Phone = ( { setter }) => {
    
    function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Phone" readContent={handleInput}/>
        </div>
    )
}

export default Phone