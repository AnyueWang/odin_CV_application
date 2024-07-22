const GeneralInfo = ({ info, setInfo }) => {
  const handleChange = (newInfo) => {
    setInfo(newInfo)
    localStorage.setItem('General Information', JSON.stringify(newInfo))
  }

  return (
    <form className="info-form">
      <div>
        <label htmlFor="first-name">First name:</label>
        <input type="text" id="first-name" value={info.firstName} onChange={(e) => handleChange({ ...info, firstName: e.target.value })} />
      </div>

      <div>
        <label htmlFor="last-name">Last name:</label>
        <input type="text" id="last-name" value={info.lastName} onChange={(e) => handleChange({ ...info, lastName: e.target.value })} />
      </div>

      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={info.title} onChange={(e) => handleChange({ ...info, title: e.target.value })} />
      </div>

      <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" value={info.email} onChange={(e) => handleChange({ ...info, email: e.target.value })} />
      </div>

      <div>
        <label htmlFor="telephone">Telephone:</label>
        <input type="tel" id="telephone" value={info.telephone} onChange={(e) => handleChange({ ...info, telephone: e.target.value })} />
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={info.address} onChange={(e) => handleChange({ ...info, address: e.target.value })} />
      </div>

      <div>
        <label htmlFor="website">Website:</label>
        <input type="url" id="website" value={info.website} onChange={(e) => handleChange({ ...info, website: e.target.value })} />
      </div>

      <div>
        <label htmlFor="linkedin">LinkedIn:</label>
        <input type="url" id="linkedin" value={info.linkedin} onChange={(e) => handleChange({ ...info, linkedin: e.target.value })} />
      </div>

      <div>
        <label htmlFor="github">GitHub:</label>
        <input type="url" id="github" value={info.github} onChange={(e) => handleChange({ ...info, github: e.target.value })} />
      </div>

      <div>
        <label htmlFor="summary">Summary:</label>
        <textarea id="summary" value={info.summary} rows={5} onChange={(e) => handleChange({ ...info, summary: e.target.value })} />
      </div>

      <div>
        <label htmlFor="skills">Skills:</label>
        <textarea id="skills" value={info.skills} rows={3} onChange={(e) => handleChange({ ...info, skills: e.target.value })} />
      </div>

      <div>
        <label htmlFor="languages">Languages:</label>
        <textarea id="languages" value={info.languages} rows={2} onChange={(e) => handleChange({ ...info, languages: e.target.value })} />
      </div>
    </form>
  )
}

export default GeneralInfo