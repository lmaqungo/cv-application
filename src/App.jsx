import { useContext } from 'react';
import './App.css';
import AccordionMenu from './components/AccordionMenu';
import Preview from './components/preview/Preview';
import Toolbar from './components/tools/Toolbar';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';

import { InputValuesContext } from './context/InputValuesContext';

function App() {

  const { toggleEdit } = useContext(InputValuesContext)
  
  return ( 
    <>
      <AccordionMenu show={toggleEdit} />
      <Preview show={!toggleEdit} />
      <Toolbar />
    </>
  )
}

export default App


