import InputField from "../InputField"

const Github = ({ setter, value }) => {
  function handleInput(e){
        setter(e.target.value)
}

    return (
        <div>
            <InputField label="Github" readContent={handleInput} value={value}/>
        </div>
    )
}

export default Github