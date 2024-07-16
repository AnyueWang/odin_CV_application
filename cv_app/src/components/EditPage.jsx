import GeneralInfo from './GeneralInfo'

const EditPage = ({ generalInfo, setGeneralInfo }) => {
  return (
    <div>
      <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
      {/* <WorkInfo /> */}
    </div>
  )
}

export default EditPage