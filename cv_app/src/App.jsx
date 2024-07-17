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
  const initialEducationInfo = [{
    id: uuidv4(),
    degree: '',
  }]

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo)
  const [workInfo, setWorkInfo] = useState(initialWorkInfo)
  const [educationInfo, setEducationInfo] = useState(initialEducationInfo)

  return (
    <>
      <h1>CV Application</h1>
      <div className='container'>
        <EditPage
          generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
          workInfo={workInfo} setWorkInfo={setWorkInfo}
          educationInfo={educationInfo} setEducationInfo={setEducationInfo}
        />
        <DisplayPage generalInfo={generalInfo} workInfo={workInfo} educationInfo={educationInfo} />
      </div>
    </>
  )
}

export default App
