import InputField from "../InputField";

const StartDate = ({ setter, value }) => {

  function handleInput(e){
        setter(e.target.value)
    }
    
    return (
        <div>
            <InputField label="Start Date" readContent={handleInput} value={value}/>
        </div>
    )
}

export default StartDate