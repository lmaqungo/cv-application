import React from 'react'
import InputField from '../InputField'

const SectionName = ({ setter}) => {
  return (
    <>
        <InputField label="Section Name" readContent={setter}/>
    </>
  )
}

export default SectionName