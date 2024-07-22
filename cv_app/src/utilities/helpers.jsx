import { v4 as uuidv4 } from 'uuid'

const newGeneralInfo = () => ({
  firstName: '',
  lastName: '',
  title: '',
  email: '',
  telephone: '',
  address: '',
  website: '',
  linkedin: '',
  github: '',
  summary: '',
  skills: '',
  languages: '',
})
const newWorkInfo = () => [{
  id: uuidv4(),
  title: '',
  company: '',
  location: '',
  from: '',
  to: '',
  description: '',
}]
const newEducationInfo = () => [{
  id: uuidv4(),
  degree: '',
  major: '',
  institution: '',
  location: '',
  from: '',
  to: '',
}]
const newProjectInfo = () => [{
  id: uuidv4(),
  name: '',
}]

export default {
  newGeneralInfo,
  newWorkInfo,
  newEducationInfo,
  newProjectInfo,
}