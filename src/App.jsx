import { useState } from 'react'
import './App.css'
import {AppContext} from './appContext.js'
import FirstPage from './pages/FirstPage.jsx'

function App() {
  const [component, setComponent] = useState(<FirstPage />)
  return (
    <AppContext.Provider value={{ component, setComponent }}>
      {component}
    </AppContext.Provider>
  )
}

export default App
