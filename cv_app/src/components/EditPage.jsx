import { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import WorkInfo from './WorkInfo'
import ExpandBtn from './ExpandBtn'
import EducationInfo from './EducationInfo'
import ProjectInfo from './ProjectInfo'

const EditPage = ({ generalInfo, setGeneralInfo, workInfo, setWorkInfo, educationInfo, setEducationInfo, projectInfo, setProjectInfo }) => {
  const infos = [
    'General Information',
    'Work Experience',
    'Education Experience',
    'Project Experience'
  ]
  const [expandInfo, setExpandInfo] = useState(null)
  const toggleExpand = (infoIdx) => {
    setExpandInfo(expandInfo === infoIdx ? null : infoIdx)
  }
  return (
    <div className='edit-container'>
      <ExpandBtn isExpand={expandInfo === 0} handleClick={() => toggleExpand(0)} btnTag={infos[0]}>
        <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
      </ExpandBtn>
      <ExpandBtn isExpand={expandInfo === 1} handleClick={() => toggleExpand(1)} btnTag={infos[1]}>
        <WorkInfo info={workInfo} setInfo={setWorkInfo} />
      </ExpandBtn>
      <ExpandBtn isExpand={expandInfo === 2} handleClick={() => toggleExpand(2)} btnTag={infos[2]}>
        <EducationInfo info={educationInfo} setInfo={setEducationInfo} />
      </ExpandBtn>
      <ExpandBtn isExpand={expandInfo === 3} handleClick={() => toggleExpand(3)} btnTag={infos[3]}>
        <ProjectInfo info={projectInfo} setInfo={setProjectInfo} />
      </ExpandBtn>
    </div>
  )
}

export default EditPage