import { useState, useEffect } from 'react'
import './App.css'
import EditPage from './components/EditPage'
import DisplayPage from './components/DisplayPage'
import Header from './components/Header'
import Footer from './components/Footer'
import helpers from './utilities/helpers'

function App() {
  const [generalInfo, setGeneralInfo] = useState(helpers.newGeneralInfo())
  const [workInfo, setWorkInfo] = useState(helpers.newWorkInfo())
  const [educationInfo, setEducationInfo] = useState(helpers.newEducationInfo())
  const [projectInfo, setProjectInfo] = useState(helpers.newProjectInfo())

  useEffect(()=>{
    const localGeneral = JSON.parse(localStorage['General Information'])
    setGeneralInfo(localGeneral)
  }, [])

  return (
    <>
      <Header />
      <div className='container'>
        <EditPage
          generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
          workInfo={workInfo} setWorkInfo={setWorkInfo}
          educationInfo={educationInfo} setEducationInfo={setEducationInfo}
          projectInfo={projectInfo} setProjectInfo={setProjectInfo}
        />
        <DisplayPage generalInfo={generalInfo} workInfo={workInfo} educationInfo={educationInfo} projectInfo={projectInfo} />
      </div>
      <Footer />
    </>
  )
}

export default App
