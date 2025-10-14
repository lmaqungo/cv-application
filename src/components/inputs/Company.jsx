import InputField from "../InputField";

const Company = ({setter}) => {
  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Company" readContent={handleInput}/>
        </div>
    )
}

export default Company