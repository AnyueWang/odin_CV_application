import addIcon from '../assets/add.svg'

const AddExperience = ({handleClick}) => {
  return (
    <div className='add-experience-container'>
      <p>Add experience</p>
      <img src={addIcon} alt="add new work experience" className='operation-icon' onClick={handleClick} />
    </div>
  )
}

export default AddExperience