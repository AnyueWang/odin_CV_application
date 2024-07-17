const DisplayPage = ({ generalInfo, workInfo, educationInfo }) => {
  return (
    <div className="display-page">
      <p>{generalInfo.firstName + ' ' + generalInfo.lastName}</p>
      <p>{generalInfo.title}</p>
      <div>
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
      <div>
        {
          educationInfo.map(each => {
            return (
              <div key={each.id}>
                <p>{each.degree}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DisplayPage