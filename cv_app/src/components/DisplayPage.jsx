import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import addressIcon from '../assets/address.svg'
import websiteIcon from '../assets/website.svg'
import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'

const DisplayPage = ({ generalInfo, workInfo, educationInfo, projectInfo }) => {
  return (
    <div className="display-page">
      <p>{generalInfo.firstName + ' ' + generalInfo.lastName}</p>
      <p>{generalInfo.title}</p>
      <p><img src={emailIcon} className='icon-display' />: {generalInfo.email}</p>
      <p><img src={phoneIcon} className='icon-display' />: {generalInfo.telephone}</p>
      <p><img src={addressIcon} className='icon-display' />: {generalInfo.address}</p>
      <p><img src={websiteIcon} className='icon-display' />: {generalInfo.website}</p>
      <p><img src={linkedinIcon} className='icon-display' />: {generalInfo.linkedin}</p>
      <p><img src={githubIcon} className='icon-display' />: {generalInfo.github}</p>
      <p>Summary: {generalInfo.summary}</p>
      <p>Skills: {generalInfo.skills}</p>
      <p>Languages: {generalInfo.languages}</p>
      <div>
        {
          workInfo.map(each => {
            return (
              <div key={each.id}>
                <p>{each.title}</p>
                <p>{each.company}</p>
                <p>{`${each.from} - ${each.to}`}</p>
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