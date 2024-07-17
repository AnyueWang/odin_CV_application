import { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import WorkInfo from './WorkInfo'
import ExpandBtn from './ExpandBtn'

const EditPage = ({ generalInfo, setGeneralInfo, workInfo, setWorkInfo }) => {
  const infos = [
    'General Information',
    'Work Experience',
  ]
  const [expandInfo, setExpandInfo] = useState(null)
  const toggleExpand = (infoIdx) => {
    expandInfo === infoIdx
    ? setExpandInfo(null)
    : setExpandInfo(infoIdx)
  }
  return (
    <div>
      <ExpandBtn isExpand={expandInfo===0} handleClick={()=>toggleExpand(0)} btnTag={infos[0]}>
        <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
      </ExpandBtn>
      <ExpandBtn isExpand={expandInfo===1} handleClick={()=>toggleExpand(1)} btnTag={infos[1]}>
        <WorkInfo info={workInfo} setInfo={setWorkInfo} />
      </ExpandBtn>
    </div>
  )
}

export default EditPage