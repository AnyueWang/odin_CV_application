import { useState } from 'react'
import './App.css'
import EditPage from './components/EditPage'
import DisplayPage from './components/DisplayPage'
import helpers from './utilities/helpers'

function App() {
  const [generalInfo, setGeneralInfo] = useState(helpers.newGeneralInfo())
  const [workInfo, setWorkInfo] = useState(helpers.newWorkInfo())
  const [educationInfo, setEducationInfo] = useState(helpers.newEducationInfo())
  const [projectInfo, setProjectInfo] = useState(helpers.newProjectInfo())

  return (
    <>
      <div className='header'>
        <h1>CV Application</h1>
      </div>
      <div className='container'>
        <EditPage
          generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
          workInfo={workInfo} setWorkInfo={setWorkInfo}
          educationInfo={educationInfo} setEducationInfo={setEducationInfo}
          projectInfo={projectInfo} setProjectInfo={setProjectInfo}
        />
        <DisplayPage generalInfo={generalInfo} workInfo={workInfo} educationInfo={educationInfo} projectInfo={projectInfo} />
      </div>
      <div className='footer'>
        <p>© 2024 CV Application. Created By Anyue Wang. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default App
