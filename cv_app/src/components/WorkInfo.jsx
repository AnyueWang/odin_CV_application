import AddExperience from "./AddExperience"
import helpers from '../utilities/helpers'

const WorkInfo = ({ info, setInfo }) => {
  const addNewExperience = () => {
    setInfo(info.concat(helpers.newWorkInfo()))
  }
  return (
    <form className="info-form">
      {<>
        <AddExperience handleClick={addNewExperience} />
        {info.map((eachExp, idx) => {
          return (
            <div key={eachExp.id}>
              <p>Experience #{idx + 1}</p>
              <label htmlFor={'job-title-' + eachExp.id}>Job title:</label>
              <input
                type="text"
                id={'job-title-' + eachExp.id}
                value={eachExp.title}
                onChange={(e) => {
                  const otherExps = info.filter(each => each.id !== eachExp.id)
                  eachExp.title = e.target.value
                  setInfo([...otherExps, eachExp])
                }}
              />
            </div>
          )
        })}
      </>
      }

    </form>
  )
}

export default WorkInfo