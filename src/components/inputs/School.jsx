import InputField from "../InputField"

const School = ({ setter, value }) => {
    function handleInput(e){
        setter(e.target.value);
    }

  return (
        <div>
            <InputField label="School" readContent={handleInput} value={value}/>
        </div>
    )
}



export default School