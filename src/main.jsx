import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import InputValuesProvider from './context/InputValuesProvider.jsx'

createRoot(document.getElementById('root')).render(
    <InputValuesProvider>
        <App />
    </InputValuesProvider>
)
