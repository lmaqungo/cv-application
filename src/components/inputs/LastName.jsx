import InputField from '../InputField'

const LastName = ({ setter, value }) => {

  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <>
            <InputField label="Last Name" readContent={handleInput} value={value}/>
        </>
    )
}

export default LastName



