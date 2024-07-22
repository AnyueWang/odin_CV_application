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

              <div className="from-to">
                <div className="date-picker">
                  <label htmlFor={'from-' + eachExp.id}>From:</label>
                  <input
                    type="month"
                    id={'from-' + eachExp.id}
                    value={eachExp.from}
                    onChange={(e) => {
                      eachExp.from = e.target.value
                      setInfo([...info])
                    }}
                  />
                </div>

                <div className="date-picker">
                  <label htmlFor={'to-' + eachExp.id}>To:</label>
                  <input
                    type="month"
                    id={'to-' + eachExp.id}
                    value={eachExp.to}
                    onChange={(e) => {
                      eachExp.to = e.target.value
                      setInfo([...info])
                    }}
                  />
                </div>
              </div>

              <label htmlFor={'description-' + eachExp.id}>Description:</label>
              <textarea
                id={'description-' + eachExp.id}
                value={eachExp.description}
                onChange={(e) => {
                  eachExp.description = e.target.value
                  setInfo([...info])
                }}
                rows={5}
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