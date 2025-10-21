import InputField from "../InputField"

const Location = ({ setter, value }) => {

    function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Location" readContent={handleInput} value={value}/>
        </div>
    )
}

export default Location