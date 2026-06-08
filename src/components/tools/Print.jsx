import React from 'react'
import { PrintIcon } from '../../icons'
import { useReactToPrint } from 'react-to-print';
import { useContext } from 'react';
import { InputValuesContext } from '../../context/InputValuesContext';

const Print = () => {

  const { contentRef } = useContext(InputValuesContext)


  const onClick = useReactToPrint({ contentRef })

  return (
    <div className='tool' onClick={onClick} >
        <PrintIcon colour='black'/>
    </div>
  )
}

export default Print