import { Toaster } from 'react-hot-toast'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
        <App/>
        <Toaster/>
    </AppContextProvider>
  </BrowserRouter>
)
