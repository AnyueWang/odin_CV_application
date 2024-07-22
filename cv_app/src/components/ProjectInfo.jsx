import helpers from "../utilities/helpers"
import DeleteExperience from "./DeleteExperience"
import AddExperience from "./AddExperience"
import PeriodSetting from "./PeriodSetting"
import InputInfo from "./InputInfo"
import TextareaInfo from "./TextareaInfo"

const ProjectInfo = ({ info, setInfo }) => {
  const addNewExperience = () => {
    setInfo(info.concat(helpers.newEducationInfo()))
  }
  const deleteExperience = (id) => {
    setInfo(info.filter(each => each.id !== id))
  }
  const handleChange = (newInfo) => {
    setInfo(newInfo)
    localStorage.setItem('Project Experience', JSON.stringify(newInfo))
  }

  return (
    <form className="info-form">
      {
        info.map((eachExp, idx) => {
          return (
            <div key={eachExp.id} className="one-experience">
              <DeleteExperience handleClick={() => deleteExperience(eachExp.id)} idx={idx} />

              <InputInfo id={'name-' + eachExp.id} type='text' tag='Project name' value={eachExp.name} onChange={(e) => {
                eachExp.name = e.target.value
                handleChange([...info])
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
              <TextareaInfo id={'description-' + eachExp.id} tag='Description' value={eachExp.description} rows={5} onChange={(e) => {
                eachExp.description = e.target.value
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

export default ProjectInfo