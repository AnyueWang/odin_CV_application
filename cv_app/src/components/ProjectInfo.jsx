import helpers from "../utilities/helpers"
import DeleteExperience from "./DeleteExperience"
import AddExperience from "./AddExperience"
import PeriodSetting from "./PeriodSetting"

const ProjectInfo = ({ info, setInfo }) => {
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

              <label htmlFor={'name-' + eachExp.id}>Project name:</label>
              <input
                type="text"
                id={'name-' + eachExp.id}
                value={eachExp.name}
                onChange={(e) => {
                  eachExp.name = e.target.value
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

              <label htmlFor={'description-' + eachExp.id}>Project name:</label>
              <textarea
                id={'description-' + eachExp.id}
                value={eachExp.description}
                rows={5}
                onChange={(e) => {
                  eachExp.description = e.target.value
                  setInfo([...info])
                }}
              />
            </div>
          )
        })
      }
      <AddExperience handleClick={addNewExperience} />
    </form>
  )
}

export default ProjectInfo