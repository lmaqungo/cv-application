import InputField from '../InputField'

const FirstName = ({ setter, value }) => {

    function handleInput(e){
        setter(e.target.value)
    }

    return (
        <>
            <InputField label="First Name" readContent={handleInput} value={value} />
        </>
    )
}

export default FirstName