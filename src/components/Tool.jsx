import React from 'react'

const Tool = ({ buttonAction, type }) => {


    function DeleteIcon({ colour }){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <title>delete-outline</title>
                <path fill={colour} d="M 6,19 A 2,2 0 0,0 8,21 H 16 A 2,2 0 0,0 18,19 V 7 H 6 V 19 M 8,9 H 16 V 19 H 8 V 9 M 15.5,4 L 14.5,3 H 9.5 L 8.5,4 H 5 V 6 H 19 V 4 H 15.5 Z" />
        </svg>
        )
    }

    function PrintIcon({ colour }){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='24' height='24' ><title>printer-outline</title><path fill={colour} d="M19 8C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8H6V3H18V8H19M8 5V8H16V5H8M16 19V15H8V19H16M18 15H20V11C20 10.45 19.55 10 19 10H5C4.45 10 4 10.45 4 11V15H6V13H18V15M19 11.5C19 12.05 18.55 12.5 18 12.5C17.45 12.5 17 12.05 17 11.5C17 10.95 17.45 10.5 18 10.5C18.55 10.5 19 10.95 19 11.5Z" /></svg>
        )
    }

    function DownloadIcon({ colour }){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='24' height='24'><title>file-download-outline</title><path fill={colour} d="M8 17V15H16V17H8M16 10L12 14L8 10H10.5V7H13.5V10H16M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M5 5V19H19V5H5Z" /></svg>
        )
    }

    function RefreshIcon({ colour }){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='24' height='24'><title>refresh</title><path fill={colour} d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" /></svg>
        )
    }

    function renderIcon(){
        switch(type){
            case 'delete':
                return <DeleteIcon colour='red'/>
            case 'download':
                return <DownloadIcon colour='black'/>
            case 'print':
                return <PrintIcon colour='black'/>
            case 'refresh':
                return <RefreshIcon colour='black'/>
        }
    }


  return (
    <div className='tool' onClick={buttonAction}>
        {renderIcon()}
    </div>
  )
}

export default Tool