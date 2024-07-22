import { useState } from "react"

const PeriodSetting = ({ exp, setToPresent, changeFrom, changeTo }) => {
  const [isOngoing, setIsOngoing] = useState(exp.to === 'Present')
  const toggleOngoing = () => {
    setIsOngoing(!isOngoing)
    setToPresent(!isOngoing)
  }

  return (
    <div className="from-to">
      <div className="date-picker">
        <label htmlFor={'from-' + exp.id}>From:</label>
        <input
          type="month"
          id={'from-' + exp.id}
          value={exp.from}
          onChange={changeFrom}
        />
      </div>

      <div className={"date-picker " + (isOngoing ? 'to-invisible' : '')}>
        <label htmlFor={'to-' + exp.id}>To:</label>
        <input
          type="month"
          id={'to-' + exp.id}
          value={exp.to}
          onChange={changeTo}
        />
      </div>

      <div className="current-radio">
        <label htmlFor={"current-" + exp.id}>Is this experience still ongoing? </label>
        <input
          type="checkbox"
          id={"current-" + exp.id}
          onClick={toggleOngoing}
          defaultChecked={isOngoing}
        />
      </div>
    </div>
  )
}

export default PeriodSetting