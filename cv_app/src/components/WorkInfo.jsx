import addIcon from '../assets/add.svg'

const WorkInfo = ({ info, setInfo }) => {
  return (
    <form className="info-form">
      { <>
      <div>
        <p>Add experience</p>
        <img src={addIcon} alt="add new work experience" className='add-icon' />
      </div>
        {info.map((eachExp, idx) => {
          return (
            <div key={eachExp.id}>
              <p>Experience #{idx+1}</p>
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