const EducationInfo = ({ info, setInfo }) => {
  return (
    <form className="info-form">
      {
        info.map(eachExp => {
          return (
            <div key={eachExp.id}>
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

    </form>
  )
}

export default EducationInfo