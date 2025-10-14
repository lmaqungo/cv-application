import InputField from "../InputField"

const Github = ({ setter }) => {
  function handleInput(e){
        setter(e.target.value)
}

    return (
        <div>
            <InputField label="Github" readContent={handleInput}/>
        </div>
    )
}

export default Github