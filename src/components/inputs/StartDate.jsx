import InputField from "../InputField";

const StartDate = ( {setter}) => {

  function handleInput(e){
        setter(e.target.value)
    }
    
    return (
        <div>
            <InputField label="Start Date" readContent={handleInput}/>
        </div>
    )
}

export default StartDate