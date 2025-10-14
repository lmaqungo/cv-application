import React from 'react'

const AddItemButton = ({ title, addJob }) => {

  return (
    <>
        <button className='add-item-button' onClick={addJob}>{title}</button>
    </>
  )
}

export default AddItemButton