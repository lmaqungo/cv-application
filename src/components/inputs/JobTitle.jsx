import InputField from '../InputField'

const JobTitle = ({ setter, value }) => {
  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Job Title" readContent={handleInput} value={value}/>
        </div>
    )
}

export default JobTitle