const GeneralInfo = ({ info, setInfo }) => {
  return (
    <form className="info-form">
      <div>
        <label htmlFor="first-name">First name:</label>
        <input type="text" id="first-name" value={info.firstName} onChange={(e) => setInfo({ ...info, firstName: e.target.value })} />
      </div>

      <div>
        <label htmlFor="last-name">Last name:</label>
        <input type="text" id="last-name" value={info.lastName} onChange={(e) => setInfo({ ...info, lastName: e.target.value })} />
      </div>

      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={info.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} />
      </div>
    </form>
  )
}

export default GeneralInfo