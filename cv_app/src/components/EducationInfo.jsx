import helpers from "../utilities/helpers"
import DeleteExperience from "./DeleteExperience"
import AddExperience from "./AddExperience"
import PeriodSetting from "./PeriodSetting"

const EducationInfo = ({ info, setInfo }) => {
  const addNewExperience = () => {
    setInfo(info.concat(helpers.newEducationInfo()))
  }
  const deleteExperience = (id) => {
    setInfo(info.filter(each => each.id !== id))
  }
  return (
    <form className="info-form">
      {
        info.map((eachExp, idx) => {
          return (
            <div key={eachExp.id} className="one-experience">
              <DeleteExperience handleClick={() => deleteExperience(eachExp.id)} idx={idx} />

              <label htmlFor={'degree-' + eachExp.id}>Degree:</label>
              <input
                type="text"
                id={'degree-' + eachExp.id}
                value={eachExp.degree}
                onChange={(e) => {
                  eachExp.degree = e.target.value
                  setInfo([...info])
                }}
              />

              <label htmlFor={'major-' + eachExp.id}>Major:</label>
              <input
                type="text"
                id={'major-' + eachExp.id}
                value={eachExp.major}
                onChange={(e) => {
                  eachExp.major = e.target.value
                  setInfo([...info])
                }}
              />

              <label htmlFor={'institution-' + eachExp.id}>Institution:</label>
              <input
                type="text"
                id={'institution-' + eachExp.id}
                value={eachExp.institution}
                onChange={(e) => {
                  eachExp.institution = e.target.value
                  setInfo([...info])
                }}
              />

              <label htmlFor={'location-' + eachExp.id}>Location:</label>
              <input
                type="text"
                id={'location-' + eachExp.id}
                value={eachExp.location}
                onChange={(e) => {
                  eachExp.location = e.target.value
                  setInfo([...info])
                }}
              />

              <PeriodSetting
                exp={eachExp}
                changeFrom={(e) => {
                  eachExp.from = e.target.value
                  setInfo([...info])
                }}
                changeTo={(e) => {
                  eachExp.to = e.target.value
                  setInfo([...info])
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