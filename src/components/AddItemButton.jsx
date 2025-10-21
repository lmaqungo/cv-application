import React from 'react'

const AddItemButton = ({ title, addAction }) => {

  return (
    <>
        <button className='add-item-button' onClick={addAction}>{title}</button>
    </>
  )
}

export default AddItemButton