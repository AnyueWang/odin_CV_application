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
    title: '',
  }]
  const initialEducationInfo = [{
    id: uuidv4(),
    degree: '',
  }]
  const initialProjectInfo = [{
    id: uuidv4(),
    name: '',
  }]

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo)
  const [workInfo, setWorkInfo] = useState(initialWorkInfo)
  const [educationInfo, setEducationInfo] = useState(initialEducationInfo)
  const [projectInfo, setProjectInfo] = useState(initialProjectInfo)

  return (
    <>
      <h1>CV Application</h1>
      <div className='container'>
        <EditPage
          generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
          workInfo={workInfo} setWorkInfo={setWorkInfo}
          educationInfo={educationInfo} setEducationInfo={setEducationInfo}
          projectInfo={projectInfo} setProjectInfo={setProjectInfo}
        />
        <DisplayPage generalInfo={generalInfo} workInfo={workInfo} educationInfo={educationInfo} projectInfo={projectInfo} />
      </div>
    </>
  )
}

export default App
