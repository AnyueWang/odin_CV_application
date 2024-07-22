import helpers from "../utilities/helpers"
import DeleteExperience from "./DeleteExperience"
import AddExperience from "./AddExperience"
import PeriodSetting from "./PeriodSetting"
import InputInfo from "./InputInfo"

const EducationInfo = ({ info, setInfo }) => {
  const addNewExperience = () => {
    setInfo(info.concat(helpers.newEducationInfo()))
  }
  const deleteExperience = (id) => {
    setInfo(info.filter(each => each.id !== id))
  }
  const handleChange = (newInfo) => {
    setInfo(newInfo)
    localStorage.setItem('Education Experience', JSON.stringify(newInfo))
  }
  return (
    <form className="info-form">
      {
        info.map((eachExp, idx) => {
          return (
            <div key={eachExp.id} className="one-experience">
              <DeleteExperience handleClick={() => deleteExperience(eachExp.id)} idx={idx} />

              <InputInfo id={'degree-' + eachExp.id} type='text' tag='Degree' value={eachExp.degree} onChange={(e) => {
                eachExp.degree = e.target.value
                setInfo([...info])
              }} />
              <InputInfo id={'major-' + eachExp.id} type='text' tag='Major' value={eachExp.major} onChange={(e) => {
                eachExp.major = e.target.value
                setInfo([...info])
              }} />
              <InputInfo id={'institution-' + eachExp.id} type='text' tag='Institution' value={eachExp.institution} onChange={(e) => {
                eachExp.institution = e.target.value
                setInfo([...info])
              }} />
              <InputInfo id={'location-' + eachExp.id} type='text' tag='Location' value={eachExp.location} onChange={(e) => {
                eachExp.location = e.target.value
                setInfo([...info])
              }} />
              <PeriodSetting
                exp={eachExp}
                setToPresent={(isOngoing) => {
                  eachExp.to = isOngoing ? 'Present' : ''
                  handleChange([...info])
                }}
                changeFrom={(e) => {
                  eachExp.from = e.target.value
                  handleChange([...info])
                }}
                changeTo={(e) => {
                  eachExp.to = e.target.value
                  handleChange([...info])
                }} />
            </div>
          )
        })
      }
      <AddExperience handleClick={addNewExperience} />
    </form>
  )
}

export default EducationInfo