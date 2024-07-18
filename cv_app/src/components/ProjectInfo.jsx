const ProjectInfo = ({ info, setInfo }) => {
  return (
    <form className="info-form">
      {
        info.map(eachExp => {
          return (
            <div key={eachExp.id}>
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

    </form>
  )
}

export default ProjectInfo