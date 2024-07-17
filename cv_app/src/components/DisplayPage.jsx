const DisplayPage = ({ generalInfo, workInfo }) => {
  return (
    <div className="display-page">
      <p>{generalInfo.firstName + ' ' + generalInfo.lastName}</p>
      <p>{generalInfo.title}</p>
      {
        workInfo.map(each => {
          return (
            <div key={each.id}>
              <p>{each.jobTitle}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayPage