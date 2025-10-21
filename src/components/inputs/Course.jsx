import InputField from "../InputField"

const Course = ({ setter, value }) => {
    function handleInput(e){
        setter(e.target.value);
    }

  return (
        <div>
            <InputField label="Course" readContent={handleInput} value={value}/>
        </div>
    )
}


export default Course