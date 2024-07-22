import AddExperience from "./AddExperience"
import DeleteExperience from "./DeleteExperience"
import helpers from '../utilities/helpers'
import PeriodSetting from "./PeriodSetting"

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

              <label htmlFor={'title-' + eachExp.id}>Job title:</label>
              <input
                type="text"
                id={'title-' + eachExp.id}
                value={eachExp.title}
                onChange={(e) => {
                  eachExp.title = e.target.value
                  setInfo([...info])
                }}
              />

              <label htmlFor={'company-' + eachExp.id}>Company:</label>
              <input
                type="text"
                id={'company-' + eachExp.id}
                value={eachExp.company}
                onChange={(e) => {
                  eachExp.company = e.target.value
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
                setToPresent={(isOngoing) => {
                  eachExp.to = isOngoing ? 'Present' : ''
                  setInfo([...info])
                }}
                changeFrom={(e) => {
                  eachExp.from = e.target.value
                  setInfo([...info])
                }}
                changeTo={(e) => {
                  eachExp.to = e.target.value
                  setInfo([...info])
                }}
              />

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