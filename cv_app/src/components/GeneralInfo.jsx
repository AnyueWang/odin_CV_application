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

      <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" value={info.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} />
      </div>

      <div>
        <label htmlFor="telephone">Telephone:</label>
        <input type="tel" id="telephone" value={info.telephone} onChange={(e) => setInfo({ ...info, telephone: e.target.value })} />
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={info.address} onChange={(e) => setInfo({ ...info, address: e.target.value })} />
      </div>

      <div>
        <label htmlFor="website">Website:</label>
        <input type="url" id="website" value={info.website} onChange={(e) => setInfo({ ...info, website: e.target.value })} />
      </div>

      <div>
        <label htmlFor="linkedin">LinkedIn:</label>
        <input type="url" id="linkedin" value={info.linkedin} onChange={(e) => setInfo({ ...info, linkedin: e.target.value })} />
      </div>
    </form>
  )
}

export default GeneralInfo