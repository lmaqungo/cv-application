import InputField from "../InputField"

const Location = ({ setter }) => {

    function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Location" readContent={handleInput}/>
        </div>
    )
}

export default Location