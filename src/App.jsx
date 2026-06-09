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
      <div className={`main ${!toggleEdit && 'hide' }`}>
        <h2>CV builder</h2>
        <AccordionMenu show={toggleEdit} />
        <p>Built by <a href="https://github.com/lmaqungo">Lu</a></p>
      </div>
      <Preview show={!toggleEdit} />
      <Toolbar />
    </>
  )
}

export default App


