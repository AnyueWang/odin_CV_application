const DisplayPage = ({ generalInfo, workInfo, educationInfo, projectInfo }) => {
  return (
    <div className="display-page">
      <p>{generalInfo.firstName + ' ' + generalInfo.lastName}</p>
      <p>{generalInfo.title}</p>
      <p>{generalInfo.email}</p>
      <div>
        {
          workInfo.map(each => {
            return (
              <div key={each.id}>
                <p>{each.title}</p>
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
      <div>
        {
          projectInfo.map(each => {
            return (
              <div key={each.id}>
                <p>{each.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DisplayPage