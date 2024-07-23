import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import addressIcon from '../assets/address.svg'
import websiteIcon from '../assets/website.svg'
import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'

const DisplayPage = ({ generalInfo, workInfo, educationInfo, projectInfo }) => {
  return (
    <div className="display-page">
      <div className='display-basic-info'>
        <p className='display-name'>{generalInfo.firstName + ' ' + generalInfo.lastName}</p>
        <p className='display-title'>{generalInfo.title}</p>
        <p className='display-contain-icon'>
          <img src={phoneIcon} className='icon-display' />: &nbsp;&nbsp;
          {generalInfo.telephone}
        </p>
        <p className='display-contain-icon'>
          <img src={addressIcon} className='icon-display' />: &nbsp;&nbsp;
          {generalInfo.address}
        </p>
        <p className='display-contain-icon'>
          <img src={emailIcon} className='icon-display' />:  &nbsp;&nbsp;
          <a href={generalInfo.email}>{generalInfo.email}</a>
        </p>
        <p className='display-contain-icon'>
          <img src={websiteIcon} className='icon-display' />: &nbsp;&nbsp;
          <a href={generalInfo.website}>{generalInfo.website}</a>
        </p>
        <p className='display-contain-icon'>
          <img src={linkedinIcon} className='icon-display' />: &nbsp;&nbsp;
          <a href={generalInfo.linkedin}>{generalInfo.linkedin}</a>
        </p>
        <p className='display-contain-icon'>
          <img src={githubIcon} className='icon-display' />: &nbsp;&nbsp;
          <a href={generalInfo.github}>{generalInfo.github}</a>
        </p>
      </div>
      <div className='display-section'>
        <p className='display-subtitle'>Summary</p>
        <p>{generalInfo.summary}</p>
      </div>
      <div className='display-section'>
        <p className='display-subtitle'> Skills</p>
        <p className='display-textarea'>{generalInfo.skills}</p>
      </div>
      <div className='display-section'>
        <p className='display-subtitle'>Languages</p>
        <p>{generalInfo.languages}</p>
      </div>
      <div className='display-section'>
        <p className='display-subtitle'>Work Experience</p>
        {
          workInfo.map(each => {
            return (
              <div className='display-one-experience' key={each.id}>
                <div className='display-experience-basic'>
                  <p className='display-job-title'>{each.title}</p>
                  <p className='display-period' hidden={!each.from || !each.to}>{`${each.from} - ${each.to}`}</p>
                  <p  hidden={!each.company || !each.location}>{each.company}, {each.location}</p>
                </div>
                <p>{each.description}</p>
              </div>
            )
          })
        }
      </div>
      <div className='display-section'>
        <p className='display-subtitle'>Education</p>
        {
          educationInfo.map(each => {
            return (
              <div className='display-one-experience' key={each.id}>
                <div className='display-experience-basic'>
                  <p hidden={!each.degree || !each.major}><span className='display-edu-title'>{each.degree}</span>, {each.major}</p>
                  <p className='display-period' hidden={!each.from || !each.to}>{`${each.from} - ${each.to}`}</p>
                  <p hidden={!each.institution || !each.location}>{each.institution}, {each.location}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='display-section'>
        <p className='display-subtitle'>Projects</p>
        {
          projectInfo.map(each => {
            return (
              <div className='display-one-experience' key={each.id}>
                <div className='display-experience-basic'>
                  <p className='display-pro-title'>{each.name}</p>
                  <p className='display-period' hidden={!each.from || !each.to}>{`${each.from} - ${each.to}`}</p>
                </div>
                <p>{each.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DisplayPage