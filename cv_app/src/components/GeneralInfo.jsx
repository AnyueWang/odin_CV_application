import InputInfo from "./InputInfo"
import TextareaInfo from './TextareaInfo'

const GeneralInfo = ({ info, setInfo }) => {
  const handleChange = (newInfo) => {
    setInfo(newInfo)
    localStorage.setItem('General Information', JSON.stringify(newInfo))
  }

  return (
    <form className="info-form">
      <InputInfo id="first-name" type='text' tag='First name' value={info.firstName} onChange={(e) => handleChange({ ...info, firstName: e.target.value })} />
      <InputInfo id="last-name" type='text' tag='Last name' value={info.lastName} onChange={(e) => handleChange({ ...info, lastName: e.target.value })} />
      <InputInfo id="title" type='text' tag='Title' value={info.title} onChange={(e) => handleChange({ ...info, title: e.target.value })} />
      <InputInfo id="email" type='email' tag='E-mail' value={info.email} onChange={(e) => handleChange({ ...info, email: e.target.value })} />
      <InputInfo id="telephone" type='tel' tag='Telephone' value={info.telephone} onChange={(e) => handleChange({ ...info, telephone: e.target.value })} />
      <InputInfo id="address" type='text' tag='Address' value={info.address} onChange={(e) => handleChange({ ...info, address: e.target.value })} />
      <InputInfo id="website" type='url' tag='Website' value={info.website} onChange={(e) => handleChange({ ...info, website: e.target.value })} />
      <InputInfo id="linkedin" type='url' tag='LinkedIn' value={info.linkedin} onChange={(e) => handleChange({ ...info, linkedin: e.target.value })} />
      <InputInfo id="github" type='url' tag='GitHub' value={info.github} onChange={(e) => handleChange({ ...info, github: e.target.value })} />
      <TextareaInfo id='summary' tag='Summary' value={info.summary} rows={5} onChange={(e) => handleChange({ ...info, summary: e.target.value })} />
      <TextareaInfo id='skills' tag='Skills' value={info.skills} rows={3} onChange={(e) => handleChange({ ...info, skills: e.target.value })} />
      <TextareaInfo id='languages' tag='Languages' value={info.languages} rows={2} onChange={(e) => handleChange({ ...info, languages: e.target.value })} />
    </form>
  )
}

export default GeneralInfo