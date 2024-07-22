const PeriodSetting = ({ exp, changeFrom, changeTo }) => {
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

    <div className="date-picker">
      <label htmlFor={'to-' + exp.id}>To:</label>
      <input
        type="month"
        id={'to-' + exp.id}
        value={exp.to}
        onChange={changeTo}
      />
    </div>
  </div>
  )
}

export default PeriodSetting