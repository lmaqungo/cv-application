import React from 'react'
import { EditIcon, ViewIcon } from '../../icons'
import { useContext } from 'react'
import { InputValuesContext } from '../../context/InputValuesContext'

const Toggle = () => {

  const { toggleEdit, setToggleEdit } = useContext(InputValuesContext) 

  function onClick() {
    setToggleEdit(!toggleEdit)
  }
   return (
    <div className='tool toggle-button' onClick={onClick} >
      {toggleEdit ? <EditIcon /> : <ViewIcon /> }
    </div>
  )
}

export default Toggle