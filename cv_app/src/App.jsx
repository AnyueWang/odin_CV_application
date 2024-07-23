import { useState, useEffect } from 'react'
import './styles/App.css'
import './styles/Display.css'
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
    if (localStorage['General Information']) {
      const localGeneral = JSON.parse(localStorage['General Information'])
      setGeneralInfo(localGeneral)
    }
    if (localStorage['Work Experience']) {
      const localWork = JSON.parse(localStorage['Work Experience'])
      if (localWork) setWorkInfo(localWork)
    }
    if (localStorage['Education Experience']) {
      const localEducation = JSON.parse(localStorage['Education Experience'])
      if (localEducation) setEducationInfo(localEducation)
    }
    if (localStorage['Project Experience']) {
      const localProject = JSON.parse(localStorage['Project Experience'])
      if (localProject) setProjectInfo(localProject)
    }
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
