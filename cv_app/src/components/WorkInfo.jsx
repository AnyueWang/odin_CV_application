import AddExperience from "./AddExperience"
import DeleteExperience from "./DeleteExperience"
import helpers from '../utilities/helpers'

const WorkInfo = ({ info, setInfo }) => {
  const addNewExperience = () => {
    setInfo(info.concat(helpers.newWorkInfo()))
  }
  const deleteExperience = (id) => {
    setInfo(info.filter(each => each.id !== id))
  }
  return (
    <form className="info-form">
      {<>
        {info.map((eachExp, idx) => {
          return (
            <div key={eachExp.id} className="one-experience">
              <DeleteExperience handleClick={() => deleteExperience(eachExp.id)} idx={idx} />

              <label htmlFor={'job-title-' + eachExp.id}>Job title:</label>
              <input
                type="text"
                id={'job-title-' + eachExp.id}
                value={eachExp.title}
                onChange={(e) => {
                  eachExp.title = e.target.value
                  setInfo([...info])
                }}
              />

              <label htmlFor={'job-title-' + eachExp.id}>Company:</label>
              <input
                type="text"
                id={'company-' + eachExp.id}
                value={eachExp.company}
                onChange={(e) => {
                  eachExp.company = e.target.value
                  setInfo([...info])
                }}
              />

              
            </div>
          )
        })}
        <AddExperience handleClick={addNewExperience} />

      </>
      }

    </form>
  )
}

export default WorkInfo