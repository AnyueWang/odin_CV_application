const DisplayPage = ({generalInfo}) => {
  return (
    <div className="display-page">
      <p>{generalInfo.firstName + ' ' +generalInfo.lastName}</p>
    </div>
  )
}

export default DisplayPage