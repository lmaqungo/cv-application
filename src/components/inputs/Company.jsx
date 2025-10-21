import InputField from "../InputField";

const Company = ({ setter, value }) => {
  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Company" readContent={handleInput} value={value}/>
        </div>
    )
}

export default Company