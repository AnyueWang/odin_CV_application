import AddExperience from "./AddExperience"
import DeleteExperience from "./DeleteExperience"
import helpers from '../utilities/helpers'
import PeriodSetting from "./PeriodSetting"
import InputInfo from "./InputInfo"
import TextareaInfo from "./TextareaInfo"

const WorkInfo = ({ info, setInfo }) => {
  const addNewExperience = () => {
    setInfo(info.concat(helpers.newWorkInfo()))
  }
  const deleteExperience = (id) => {
    setInfo(info.filter(each => each.id !== id))
  }
  const handleChange = (newInfo) => {
    setInfo(newInfo)
    localStorage.setItem('Work Experience', JSON.stringify(newInfo))
  }
  return (
    <form className="info-form">
      {<>
        {info.map((eachExp, idx) => {
          return (
            <div key={eachExp.id} className="one-experience">
              <DeleteExperience handleClick={() => deleteExperience(eachExp.id)} idx={idx} />

              <InputInfo id={'title-' + eachExp.id} type='text' tag='Job title' value={eachExp.title} onChange={(e) => {
                eachExp.title = e.target.value
                handleChange([...info])
              }} />
              <InputInfo id={'company-' + eachExp.id} type='text' tag='Company' value={eachExp.company} onChange={(e) => {
                eachExp.company = e.target.value
                handleChange([...info])
              }} />
              <InputInfo id={'location-' + eachExp.id} type='text' tag='Location' value={eachExp.location} onChange={(e) => {
                eachExp.location = e.target.value
                handleChange([...info])
              }} />
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
              <TextareaInfo id={'description-' + eachExp.id} tag='Description' value={eachExp.description} rows={5} onChange={(e) => {
                eachExp.description = e.target.value
                setInfo([...info])
              }} />
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