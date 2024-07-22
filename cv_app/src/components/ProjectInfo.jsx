import helpers from "../utilities/helpers"
import DeleteExperience from "./DeleteExperience"
import AddExperience from "./AddExperience"

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

              <label htmlFor={'pro-name-' + eachExp.id}>Project name:</label>
              <input
                type="text"
                id={'pro-name-' + eachExp.id}
                value={eachExp.name}
                onChange={(e) => {
                  const otherExps = info.filter(each => each.id !== eachExp.id)
                  eachExp.name = e.target.value
                  setInfo([...otherExps, eachExp])
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