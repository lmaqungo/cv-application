import InputField from "../InputField";

import React from 'react'

const EndDate = ({ setter }) => {
  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="End Date" readContent={handleInput}/>
        </div>
    )
}

export default EndDate