import { useState } from 'react'
import './App.css'
import EditPage from './components/EditPage'
import DisplayPage from './components/DisplayPage'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const initialGeneralInfo = {
    firstName: '',
    lastName: '',
    title: '',
  }
  const initialWorkInfo = [{
    id: uuidv4(),
    jobTitle: '',
  }]

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo)
  const [workInfo, setWorkInfo] = useState(initialWorkInfo)

  return (
    <>
      <h1>CV Application</h1>
      <div className='container'>
        <EditPage
          generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
          workInfo={workInfo} setWorkInfo={setWorkInfo}
        />
        <DisplayPage generalInfo={generalInfo} workInfo={workInfo} />
      </div>
    </>
  )
}

export default App
