import TextArea from "../TextArea"

const Description = ({ setter, value }) => {
  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <TextArea label="Description" rows="3" readContent={handleInput} value={value}/>
        </div>
    )
}

export default Description