const DisplayPage = ({generalInfo}) => {
  return (
    <div className="display-page">
      <p>{generalInfo.firstName + ' ' +generalInfo.lastName}</p>
      <p>{generalInfo.title}</p>
    </div>
  )
}

export default DisplayPage