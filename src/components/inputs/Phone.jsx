import InputField from "../InputField"

const Phone = ({ setter, value }) => {
    
    function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Phone" readContent={handleInput} value={value}/>
        </div>
    )
}

export default Phone