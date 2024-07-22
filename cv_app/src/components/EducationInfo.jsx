import helpers from "../utilities/helpers"
import DeleteExperience from "./DeleteExperience"
import AddExperience from "./AddExperience"

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

              <label htmlFor={'edu-degree-' + eachExp.id}>Degree:</label>
              <input
                type="text"
                id={'edu-degree-' + eachExp.id}
                value={eachExp.degree}
                onChange={(e) => {
                  const otherExps = info.filter(each => each.id !== eachExp.id)
                  eachExp.degree = e.target.value
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

export default EducationInfo