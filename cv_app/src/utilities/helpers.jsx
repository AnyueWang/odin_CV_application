import { v4 as uuidv4 } from 'uuid'

const newGeneralInfo = () => ({
  firstName: '',
  lastName: '',
  title: '',
  email: '',
  telephone: '',
  address: '',
})
const newWorkInfo = () => [{
  id: uuidv4(),
  title: '',
}]
const newEducationInfo = () => [{
  id: uuidv4(),
  degree: '',
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