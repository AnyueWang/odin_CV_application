import deleteIcon from '../assets/delete.svg'

const DeleteExperience = ({idx, handleClick}) => {
  return (
    <div className='delete-experience-container'>
      <p>Experience #{idx + 1}</p>
      <img src={deleteIcon} alt="delete experience" className="operation-icon" onClick={handleClick} hidden={idx===0}/>
    </div>
  )
}

export default DeleteExperience