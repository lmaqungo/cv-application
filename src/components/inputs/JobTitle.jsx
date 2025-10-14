import InputField from '../InputField'

const JobTitle = ( { setter }) => {
  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="Job Title" readContent={handleInput}/>
        </div>
    )
}

export default JobTitle