import { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import ExpandBtn from './ExpandBtn'

const EditPage = ({ generalInfo, setGeneralInfo }) => {
  const infos = ['General Information']
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
      {/* <WorkInfo /> */}
    </div>
  )
}

export default EditPage