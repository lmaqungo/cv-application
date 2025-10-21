import InputField from "../InputField";

import React from 'react'

const EndDate = ({ setter, value }) => {
  function handleInput(e){
        setter(e.target.value)
    }

    return (
        <div>
            <InputField label="End Date" readContent={handleInput} value={value}/>
        </div>
    )
}

export default EndDate