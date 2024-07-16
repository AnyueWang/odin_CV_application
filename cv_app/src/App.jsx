import { useState } from 'react'
import './App.css'
import EditPage from './components/EditPage'
import DisplayPage from './components/DisplayPage'

function App() {
  const initialGeneralInfo = {
    firstName: '',
    lastName: '',
    title: '',
  }

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo)

  return (
    <>
      <h1>CV Application</h1>
      <div className='container'>
        <EditPage generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <DisplayPage generalInfo={generalInfo} />
      </div>
    </>
  )
}

export default App
