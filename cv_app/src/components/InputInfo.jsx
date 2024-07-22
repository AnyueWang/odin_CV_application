const InputInfo = ({ id, type, tag, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{tag}:</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  )
}

export default InputInfo