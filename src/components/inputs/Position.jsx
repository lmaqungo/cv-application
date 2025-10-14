import InputField from "../InputField"

const Position = ( { setter, value } ) => {
  function handleInput(e){
        setter(e.target.value);
    }

    return (
        <div>
            <InputField label="Position" readContent={handleInput} value={value}/>
        </div>
    )
}

export default Position