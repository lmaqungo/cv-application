import InputField from "../InputField"

const Email = ({ setter, value }) => {
    
    function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Email" readContent={handleInput} value={value}/>
        </div>
    )
}

export default Email