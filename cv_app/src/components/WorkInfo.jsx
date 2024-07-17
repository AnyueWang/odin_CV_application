const WorkInfo = ({ info, setInfo }) => {
  return (
    <form className="info-form">
      {
        info.map(eachExp => {
          return (
            <div key={eachExp.id}>
              <label htmlFor={'job-title-' + eachExp.id}>Job title:</label>
              <input
                type="text"
                id={'job-title-' + eachExp.id}
                value={eachExp.jobTitle}
                onChange={(e) => {
                  const otherExps = info.filter(each => each.id !== eachExp.id)
                  eachExp.jobTitle = e.target.value
                  setInfo([...otherExps, eachExp])
                }}
              />
            </div>
          )
        })
      }

    </form>
  )
}

export default WorkInfo