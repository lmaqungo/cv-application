import TextArea from "../TextArea"

const Description = ( {setter} ) => {
  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <TextArea label="Description" rows="3" readContent={handleInput}/>
        </div>
    )
}

export default Description