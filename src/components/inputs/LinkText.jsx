import React from 'react'
import InputField from '../InputField'

function LinkText({ handleInput }) {
  return (
    <>
        <InputField readContent={handleInput} placeholder='Link Text' category='linkContent'/>
    </>
  )
}

export default LinkText