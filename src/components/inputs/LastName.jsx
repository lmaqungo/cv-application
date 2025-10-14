import InputField from '../InputField'

const LastName = ( { setter }) => {

  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <>
            <InputField label="Last Name" readContent={handleInput}/>
        </>
    )
}

export default LastName



