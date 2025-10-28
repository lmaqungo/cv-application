import React from 'react'
import InputField from '../InputField'

const LinkURL = ({ handleInput }) => {
  return (
    <>
        <InputField readContent={handleInput} placeholder='URL' category='href'/>
    </>
  )
}

export default LinkURL