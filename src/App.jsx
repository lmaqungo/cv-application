import { useContext } from 'react';
import './App.css';
import AccordionMenu from './components/AccordionMenu';
import Preview from './components/preview/Preview';
import Toolbar from './components/tools/Toolbar';

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


